import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Button, DecorativeIcon } from '@/components';
import { localImages } from '@/lib/localImages';
import { clearPrintedCards, deletePrintedCard, getPrintedCards, PrintedCard } from '@/lib/archiveStorage';

export const FinalInteraction: React.FC = () => {
  const navigate = useNavigate();
  const [printedCards, setPrintedCards] = useState<PrintedCard[]>([]);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  useEffect(() => {
    setPrintedCards(getPrintedCards());
  }, []);

  const handleReplay = () => {
    navigate('/');
  };

  const handleDeleteCard = (cardId: string) => {
    const confirmDelete = window.confirm('Hapus card ini dari archive?');
    if (!confirmDelete) {
      return;
    }

    setPrintedCards(deletePrintedCard(cardId));
    if (expandedCardId === cardId) {
      setExpandedCardId(null);
    }
  };

  const handleClearHistory = () => {
    const confirmClear = window.confirm('Hapus semua riwayat archive? Aksi ini tidak bisa dibatalkan.');
    if (!confirmClear) {
      return;
    }

    clearPrintedCards();
    setExpandedCardId(null);
    setPrintedCards([]);
  };

  return (
    <div className="bg-background font-body-standard text-on-background overflow-x-hidden">
      {/* Film Grain */}
      <div 
        className="fixed inset-0 pointer-events-none z-9999 opacity-04"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <Header title="a small note for you 💌" />

      <main className="min-h-screen pt-20 pb-32 px-margin-page flex flex-col items-center justify-center relative max-w-4xl mx-auto">
        {/* Background Doodles */}
        <div className="absolute top-10 left-0 -rotate-12 opacity-20 pointer-events-none">
          <DecorativeIcon icon="favorite" size="lg" />
        </div>
        <div className="absolute bottom-40 right-4 rotate-6 opacity-20 pointer-events-none">
          <DecorativeIcon icon="auto_stories" size="lg" />
        </div>

        <section className="w-full mb-10">
          <h2 className="font-headline-md text-headline-md text-primary italic text-center mb-4">Archive Capture</h2>
          <p className="text-center text-on-surface-variant mb-6">Riwayat foto yang sudah tercetak ke card ucapan.</p>

          {printedCards.length > 0 && (
            <div className="mb-5 flex justify-center">
              <button
                type="button"
                onClick={handleClearHistory}
                className="bg-red-900 text-white px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wide hover:bg-red-800 transition-colors"
              >
                Hapus Semua Riwayat
              </button>
            </div>
          )}

          {printedCards.length === 0 ? (
            <div className="bg-surface-container p-6 rounded-lg text-center border border-outline-variant">
              <p className="text-on-surface-variant">Belum ada card tercetak. Mulai dari halaman Capture untuk membuat card baru.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {printedCards.map((card) => (
                <article key={card.id} className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 shadow-sm">
                  <img src={card.coverImage} alt={card.title} className="w-full h-48 object-cover rounded-md mb-3" />
                  <h3 className="font-headline-md text-xl text-primary">{card.title}</h3>
                  <p className="text-sm text-on-surface-variant mb-3">
                    Dicetak: {new Date(card.createdAt).toLocaleString('id-ID')}
                  </p>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {card.photos.map((photo, index) => (
                      <button
                        key={`${card.id}-${index}`}
                        type="button"
                        onClick={() => setExpandedCardId(expandedCardId === card.id ? null : card.id)}
                        className="group relative overflow-hidden rounded-md border border-outline-variant bg-surface-container-high"
                        aria-label={`Lihat foto ${index + 1} dari ${card.title}`}
                      >
                        <img
                          src={photo}
                          alt={`${card.title} foto ${index + 1}`}
                          className="h-20 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </button>
                    ))}
                  </div>
                  {expandedCardId === card.id && (
                    <div className="mb-3 rounded-md border border-dashed border-outline-variant p-3 bg-surface-container">
                      <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2 font-bold">Semua foto tersimpan</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {card.photos.map((photo, index) => (
                          <img
                            key={`${card.id}-expanded-${index}`}
                            src={photo}
                            alt={`${card.title} tampilan besar ${index + 1}`}
                            className="w-full h-40 object-cover rounded-sm border border-outline-variant"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => setExpandedCardId(expandedCardId === card.id ? null : card.id)}
                    className="bg-primary-container text-white px-4 py-2 rounded-md text-sm font-bold"
                  >
                    {expandedCardId === card.id ? 'Tutup foto' : 'Lihat semua foto'}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteCard(card.id)}
                    className="mt-2 bg-red-800 text-white px-4 py-2 rounded-md text-sm font-bold"
                  >
                    Hapus Card Ini
                  </button>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Main Final Content Card */}
        <div className="relative w-full bg-surface-container-lowest shadow-lg p-8 md:p-12 border border-outline-variant" style={{ transform: 'rotate(1deg)' }}>
          {/* Decorative Tape */}
          <div 
            className="washi-tape absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 z-10 bg-red-500/20"
            style={{ transform: 'rotate(-2deg)' }}
          ></div>

          <div className="text-center space-y-6">
            <div className="mb-8 relative inline-block">
              <div className="bg-white p-4 shadow-md border-8 border-white inline-block" style={{ transform: 'rotate(3deg)' }}>
                <img
                  alt="Two hands holding a vintage photograph"
                  className="w-48 h-48 object-cover grayscale-[20%] sepia-[10%]"
                  src={localImages.finalInteraction.heroPhoto}
                />
              </div>
            </div>

            <h1 className="font-headline-lg text-headline-lg text-primary italic">
              Keep this moment close.
            </h1>

            <p className="font-body-romantic text-body-romantic text-on-surface-variant max-w-lg mx-auto">
              Every shared smile and quiet glance is a chapter in the beautiful story we're writing together. Thank you for making today a memory worth keeping.
            </p>

            <div className="pt-8 font-headline-md text-headline-md text-secondary opacity-80">
              XOXO
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 gap-6 w-full max-w-sm mt-12">
          <Button
            variant="secondary"
            size="lg"
            icon="replay"
            label="Replay story"
            onClick={handleReplay}
          >
            Replay Story
          </Button>
        </div>

        {/* Final Doodle "The End" */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-4 text-outline mb-4">
            <div className="h-px w-16 bg-outline opacity-30"></div>
            <div className="font-serif italic text-xl opacity-50 tracking-tighter">The End</div>
            <div className="h-px w-16 bg-outline opacity-30"></div>
          </div>
          <div className="flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <span 
                key={i} 
                className="material-symbols-outlined text-secondary opacity-40 text-sm"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                flare
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation Shell */}
      <nav className="bg-[#FFFDF5] dark:bg-stone-950 text-red-900 dark:text-red-400 fixed bottom-0 w-full z-50 border-t-4 border-double border-red-900/30 flex justify-around items-center px-4 pb-4 pt-2 shadow-[0_-4px_10px_rgba(139,0,0,0.03)]">
        {[
          { icon: 'auto_stories', label: 'Memory', path: '/' },
          { icon: 'photo_camera', label: 'Capture', path: '/capture' },
          { icon: 'inventory_2', label: 'Archive', path: '/archive', active: true },
        ].map((item) => (
          <div 
            key={item.label}
            className={`flex flex-col items-center justify-center p-2 transition-transform ${
              item.active
                ? 'bg-red-900 text-[#FFFDF5] rounded-sm p-3 shadow-sm scale-110'
                : 'text-stone-600 dark:text-stone-400 hover:bg-red-50 dark:hover:bg-stone-800'
            }`}
            style={item.active ? { transform: 'rotate(2deg) scale(1.1)' } : {}}
            onClick={() => navigate(item.path)}
          >
            <span 
              className="material-symbols-outlined"
              style={item.active ? { fontVariationSettings: '"FILL" 1' } : {}}
            >
              {item.icon}
            </span>
            <span className="text-[12px] font-serif uppercase tracking-widest mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default FinalInteraction;
