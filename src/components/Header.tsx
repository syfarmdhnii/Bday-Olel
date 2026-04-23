import React from 'react';
import { localImages } from '@/lib/localImages';

interface HeaderProps {
  title: string;
  subtitle?: string;
  stickerImages?: string[];
}

export const Header: React.FC<HeaderProps> = ({ 
  title, 
  subtitle, 
  stickerImages = []
}) => {
  const displayStickers = stickerImages.length > 0
    ? stickerImages
    : [
        localImages.landing.polaroidOne,
        localImages.landing.photoOlel,
        localImages.landing.polaroidTwo,
      ];

  return (
    <header className="bg-[#FFFDF5] dark:bg-stone-900 shadow-[4px_4px_0px_0px_rgba(139,0,0,0.05)] border-b-2 border-dashed border-red-900/20 sticky top-0 z-40">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div>
          <h1 className="font-headline-md text-headline-md text-primary dark:text-red-500 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-on-surface-variant text-sm mt-1">{subtitle}</p>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {displayStickers.slice(0, 3).map((image, index) => (
            <div
              key={`${image}-${index}`}
              className={index === 0 ? 'rotate-[-7deg]' : index === 1 ? 'rotate-[5deg]' : 'rotate-[-4deg]'}
            >
              <img
                src={image}
                alt={`Photo sticker ${index + 1}`}
                className={`header-sticker-media ${index === 0 ? 'sticker-heart' : index === 1 ? 'sticker-star' : 'sticker-flower'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
