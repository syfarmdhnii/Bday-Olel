import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components';
import { localImages } from '@/lib/localImages';
import { savePrintedCard } from '@/lib/archiveStorage';
import { getCapturedPhotos } from '@/lib/captureStorage';

export const MemoryBookView: React.FC = () => {
  const navigate = useNavigate();

  const fallbackPhotos = [
    localImages.memoryBook.photoOne,
    localImages.memoryBook.photoTwo,
    localImages.memoryBook.photoOlell,
  ];

  const capturedPhotos = getCapturedPhotos();
  const photosToRender = [
    capturedPhotos[0] || fallbackPhotos[0],
    capturedPhotos[1] || fallbackPhotos[1],
    capturedPhotos[2] || fallbackPhotos[2],
  ];

  const headerStickerImages = [
    localImages.landing.polaroidOne,
    localImages.landing.authorPortrait,
    localImages.landing.polaroidTwo,
  ];

  const handleFinishAndArchive = () => {
    savePrintedCard({
      id: `${Date.now()}`,
      title: 'Bday Card for Olel',
      coverImage: photosToRender[0],
      photos: photosToRender,
      createdAt: new Date().toISOString(),
    });

    navigate('/archive');
  };

  return (
    <div className="bg-background font-body-standard text-on-background relative min-h-screen overflow-x-hidden pb-24">
      {/* Texture Overlay */}
      <div className="fixed inset-0 grain opacity-20 z-0 pointer-events-none"></div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-[-40px] h-72 w-72 rounded-full bg-secondary/15 blur-3xl"></div>
        <div className="absolute top-28 right-[-60px] h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 h-52 w-52 rounded-full bg-tertiary-container/10 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Header title="A Little Memory For You 💖" stickerImages={headerStickerImages} />
      </div>

      {/* Main Content: Flipbook Interface */}
      <main className="relative z-10 max-w-6xl mx-auto mt-12 px-6 lg:px-12">
        <div className="pointer-events-none absolute top-2 left-2 hidden md:block z-30 w-24 h-24 rotate-[-15deg] shadow-lg border-4 border-white bg-white p-1">
          <img src={localImages.landing.polaroidOne} alt="Sticker luar satu" className="h-full w-full object-cover" />
        </div>
        <div className="pointer-events-none absolute top-8 right-2 hidden md:block z-30 w-24 h-24 rotate-[13deg] shadow-lg border-4 border-white bg-white p-1">
          <img src={localImages.landing.photoOlel} alt="Sticker luar dua" className="h-full w-full object-cover" />
        </div>
        <div className="pointer-events-none absolute bottom-32 left-2 hidden md:block z-30 w-20 h-20 rotate-[8deg] shadow-lg border-4 border-white bg-white p-1">
          <img src={localImages.memoryBook.photoOlell} alt="Sticker luar tiga" className="h-full w-full object-cover" />
        </div>
        <div className="pointer-events-none absolute bottom-2 right-6 hidden md:block z-30 w-24 h-24 rotate-[-10deg] shadow-lg border-4 border-white bg-white p-1">
          <img src={localImages.landing.polaroidTwo} alt="Sticker luar empat" className="h-full w-full object-cover" />
        </div>

        <div className="relative flex flex-col md:flex-row gap-0 lg:gap-2 justify-center items-stretch perspective-1000">
          {/* Left Page: The Photobooth Strip */}
          <div className="paper-page bg-surface-bright p-8 md:p-12 w-full md:w-1/2 min-h-[700px] border-r-2 border-primary/5 flex flex-col items-center relative overflow-hidden">
            <div className="absolute top-6 left-16 right-16 h-3 bg-secondary/20 rounded-full tape-strip"></div>
            <div className="absolute -left-6 top-28 rotate-[-12deg] w-24 h-12 bg-primary/15 washi-tape"></div>
            <div className="absolute bottom-24 right-8 rotate-[14deg] w-28 h-12 bg-tertiary-container/15 washi-tape"></div>

            {/* Binding Holes */}
            <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-around py-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-background border border-primary/10 shadow-inner"></div>
              ))}
            </div>

            {/* Photobooth Strip Container */}
            <div className="relative bg-[#FFFFFF] p-4 shadow-lg border border-stone-200 w-64 md:w-72 flex flex-col gap-4" style={{ transform: 'rotate(-1deg)' }}>
              {/* Photo 1 */}
              <div className="relative group">
                <div 
                  className="washi-tape absolute -top-3 -right-6 w-20 h-8 z-10 bg-red-500/40"
                  style={{ transform: 'rotate(12deg)' }}
                ></div>
                <div className="aspect-square bg-stone-100 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Candid moment of two friends laughing"
                    src={photosToRender[0]}
                  />
                </div>
              </div>

              {/* Photo 2 */}
              <div className="relative group">
                <div className="aspect-square bg-stone-100 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Hands holding a vintage film camera"
                    src={photosToRender[1]}
                  />
                </div>
              </div>

              {/* Photo 3 */}
              <div className="relative group">
                <div 
                  className="washi-tape absolute -bottom-4 -left-6 w-20 h-8 z-10 bg-red-500/30"
                  style={{ transform: 'rotate(-12deg)' }}
                ></div>
                <div className="aspect-square bg-stone-100 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Cozy cafe table with latte"
                    src={photosToRender[2]}
                  />
                </div>
              </div>

              {/* Caption */}
              <div className="pt-2 text-center">
                <p className="font-retro-handwriting text-primary text-lg leading-tight tracking-[0.08em]">21 looks gorgeous on you</p>
              </div>
            </div>

            {/* Decorative Stickers on Page */}
            <div className="absolute top-10 right-10 transform rotate-12 scale-110 drop-shadow-sm">
              <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                star
              </span>
            </div>
            <div className="absolute bottom-10 left-12 transform -rotate-12 opacity-80 drop-shadow-sm">
              <span className="material-symbols-outlined text-tertiary-container text-5xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                favorite
              </span>
            </div>
            <div className="absolute top-28 left-10 rotate-[-10deg] opacity-70">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                photo_camera
              </span>
            </div>
          </div>

          {/* Right Page: The Heartfelt Message */}
          <div className="paper-page bg-surface-bright p-12 w-full md:w-1/2 min-h-[700px] border-l-2 border-primary/5 flex flex-col relative overflow-hidden">
            {/* Header */}
            <div className="mb-12">
              <span className="inline-block px-4 py-1 bg-secondary-fixed text-on-secondary-fixed-variant font-label-caps text-label-caps rounded-full mb-4 border border-secondary/20" style={{ transform: 'rotate(-2deg)' }}>
                #taurus
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
                The kind of life that deserves to be remembered.
              </h2>
            </div>

            {/* Handwriting Area */}
            <div className="flex-grow space-y-6 relative z-10">
              <p className="font-retro-handwriting text-xl md:text-2xl text-on-surface leading-[1.9] tracking-[0.03em]">
                Selamat bertambah umur olel!! ditahun ini kamu bener bener jalanin hidup kamu dengan cara yang paling kamu usahakan, kamu berhak buat dapet semua hal bahagia ayo kita tunggu hal indah yang udah nunggu buat kita jelajahi.
              </p>
              <p className="font-retro-handwriting text-xl md:text-2xl text-on-surface leading-[1.9] tracking-[0.03em]">
                Semoga di umur 21 ini kamu bisa terus jadi diri kamu dengan versi terbaik, yang paling bahagia, yang paling kamu banget. kamu juga harus apresiasi diri kamu sendiri, semoga kita bisa terus bikin kenangan indah bareng bareng, dan semoga semua mimpi kamu dan segala hal yang kamu sedang usahakan bisa tercapai.
              </p>
              <p className="font-retro-handwriting text-xl md:text-2xl text-primary mt-12 block leading-[1.8] tracking-[0.04em]">
                Love banyak banyak bu psikolog<br />— Jinysouls
              </p>

              {/* Doodle Decorations */}
              <div className="absolute -bottom-8 right-0 opacity-40 rotate-[-8deg]">
                <span className="material-symbols-outlined text-6xl text-secondary">
                  auto_awesome
                </span>
              </div>
              <div className="absolute -top-6 right-20 rotate-[16deg] opacity-30">
                <span className="material-symbols-outlined text-5xl text-primary">
                  flare
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center pb-10">
          <div className="text-center">
            <button
              type="button"
              onClick={handleFinishAndArchive}
              className="button-tactile bg-primary-container text-[#FFFDF5] px-8 py-4 rounded-lg font-label-caps text-label-caps uppercase hover:-rotate-1 transition-transform"
            >
              Simpan di Archive
            </button>
            <p className="mt-3 text-sm text-on-surface-variant">
              Tombol ini aktif dan akan menyimpan card ucapan beserta fotonya ke Archive.
            </p>
            <button
              type="button"
              onClick={() => navigate('/capture')}
              className="mt-3 text-sm text-primary underline"
            >
              Ulangi sesi photobooth
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MemoryBookView;
