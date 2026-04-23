import React from 'react';
import { cn } from '@/lib/utils';

interface PolaroidCardProps {
  image: string;
  imageAlt?: string;
  title?: string;
  rotation?: number;
  children?: React.ReactNode;
  className?: string;
}

export const PolaroidCard: React.FC<PolaroidCardProps> = ({
  image,
  imageAlt = 'Polaroid photo',
  title,
  rotation = -2,
  children,
  className,
}) => {
  return (
    <div className={cn('group polaroid', className)} style={{ transform: `rotate(${rotation}deg)` }}>
      <div className="relative aspect-square overflow-hidden mb-4">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover grayscale-[20%] sepia-[10%] hover:grayscale-[0%] transition-all duration-500"
        />
        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
      </div>

      {title && (
        <p className="font-body-romantic text-body-romantic text-primary text-center">
          {title}
        </p>
      )}

      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default PolaroidCard;
