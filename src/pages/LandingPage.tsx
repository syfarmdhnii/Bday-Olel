import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Button, PolaroidCard, WashiTape, DecorativeIcon } from '@/components';
import { localImages } from '@/lib/localImages';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/capture');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] font-body-standard text-on-surface overflow-x-hidden">
      <Header title="Happy 21st, Olel 💖" />

      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none scrapbook-grain z-50"></div>

      <main className="relative min-h-screen">
        {/* Decorative Doodles */}
        <div className="absolute top-10 left-10 text-red-900/10 pointer-events-none select-none">
          <DecorativeIcon icon="favorite" size="lg" fill />
        </div>
        <div className="absolute bottom-20 right-10 text-red-900/10 pointer-events-none select-none rotate-12">
          <DecorativeIcon icon="draw" size="xl" />
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-10 md:pt-14 pb-12 md:pb-16 flex flex-col items-center text-center relative z-10">
          {/* Washi Tape Decorative */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-0">
            <WashiTape color="secondary" rotation={1} width="w-48" height="h-10" />
          </div>

          <div className="relative inline-block mb-8 md:mb-10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4 italic">
              Celebrating you, today and always<br />
              <span className="font-body-romantic text-headline-md block mt-4 text-on-tertiary-fixed-variant">
                a small piece by Jinysouls!
              </span>
            </h2>
            <div className="h-1 w-32 bg-primary mx-auto mt-6 rounded-full opacity-20"></div>
          </div>

          {/* Central Action */}
          <div className="group relative mb-10 md:mb-12">
            <div className="absolute -inset-4 bg-primary-container/5 rounded-full blur-2xl group-hover:bg-primary-container/10 transition-all duration-700"></div>
            <Button 
              variant="primary" 
              size="lg"
              className="group relative hover:-rotate-1 transform"
              onClick={handleStart}
            >
              Open your surprise
            </Button>
            <div className="absolute -right-12 -top-12 text-secondary rotate-12 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">loyalty</span>
            </div>
          </div>

          {/* Bento Scrapbook Grid */}
          <div className="w-full mt-1 md:mt-2">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
              {/* Polaroid Card 1 */}
              <div className="md:col-span-4">
                <PolaroidCard
                  image={localImages.landing.polaroidOne}
                  imageAlt="Close-up of vintage love letters"
                  title="Museum Date!"
                  rotation={-2}
                >
                  <WashiTape color="secondary" rotation={2} className="absolute -top-4 left-1/2 -translate-x-1/2 z-10" />
                </PolaroidCard>
              </div>

              {/* Quote Note Card */}
              <div className="md:col-span-5 md:mt-10">
                <div className="bg-surface-container p-8 md:p-10 relative shadow-inner rounded-sm border-l-4 border-primary/20 text-left">
                  <span className="material-symbols-outlined text-primary mb-4 text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                    format_quote
                  </span>
                  <p className="font-body-standard text-body-standard text-on-surface-variant leading-relaxed">
                    "Every moment with you feels like something I want to keep forever. Not because it was perfect, but because it was real, and it was ours."
                  </p>
                  <div className="mt-6 pt-6 border-t border-dashed border-primary/20 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10">
                      <img
                        className="w-full h-full object-cover"
                        alt="Jinysouls"
                        src={localImages.landing.authorPortrait}
                      />
                    </div>
                    <div>
                      <p className="font-label-caps text-label-caps text-primary">Written By</p>
                      <p className="font-body-romantic text-lg">Jinysouls</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Polaroid Card 2 */}
              <div className="md:col-span-3 md:mt-20">
                <PolaroidCard
                  image={localImages.landing.polaroidTwo}
                  imageAlt="Ramen!"
                  title="Gyudonay Ramen!"
                  rotation={3}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
