import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components';
import { saveCapturedPhotos } from '@/lib/captureStorage';

const MAX_PHOTOS = 3;
const COUNTDOWN_START = 3;
const SHOT_DELAY_MS = 900;
const PREVIEW_DELAY_MS = 1400;
const MEMORY_BOOK_TRANSITION_MS = 1050;

export const PhotoboothCapture: React.FC = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const autoRunStartedRef = useRef(false);
  const timerIdsRef = useRef<number[]>([]);

  const [cameraError, setCameraError] = useState<string>('');
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isAutoRunning, setIsAutoRunning] = useState(false);
  const [flashActive, setFlashActive] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isOpeningCard, setIsOpeningCard] = useState(false);

  const clearTimers = () => {
    timerIdsRef.current.forEach((timerId) => window.clearTimeout(timerId));
    timerIdsRef.current = [];
  };

  const captureFrame = (mirror = true): string | null => {
    if (!videoRef.current || !canvasRef.current) {
      return null;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const width = video.videoWidth || 720;
    const height = video.videoHeight || 540;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return null;
    }

    if (mirror) {
      ctx.translate(width, 0);
      ctx.scale(-1, 1);
    }

    ctx.drawImage(video, 0, 0, width, height);
    return canvas.toDataURL('image/jpeg', 0.92);
  };

  const startAutoSession = async () => {
    if (!videoRef.current || !videoRef.current.srcObject || cameraError) {
      return;
    }

    clearTimers();
    autoRunStartedRef.current = true;
    setIsAutoRunning(true);
    setCapturedPhotos([]);
    setCountdown(null);
    setFlashActive(false);
    setShowPreview(false);

    const shots: string[] = [];

    for (let shotIndex = 0; shotIndex < MAX_PHOTOS; shotIndex += 1) {
      for (let step = COUNTDOWN_START; step > 0; step -= 1) {
        setCountdown(step);
        await new Promise((resolve) => {
          const timerId = window.setTimeout(resolve, 1000);
          timerIdsRef.current.push(timerId);
        });
      }

      setCountdown(null);
      setFlashActive(true);
      playShutterSound();

      const flashTimerId = window.setTimeout(() => {
        setFlashActive(false);
      }, 180);
      timerIdsRef.current.push(flashTimerId);

      const photo = captureFrame(true);
      if (photo) {
        shots.push(photo);
        setCapturedPhotos([...shots]);
      }

      if (shotIndex < MAX_PHOTOS - 1) {
        await new Promise((resolve) => {
          const timerId = window.setTimeout(resolve, SHOT_DELAY_MS);
          timerIdsRef.current.push(timerId);
        });
      }
    }

    setIsAutoRunning(false);
    saveCapturedPhotos(shots);
    setShowPreview(true);

    const redirectId = window.setTimeout(() => {
      setIsOpeningCard(true);
      const openCardId = window.setTimeout(() => {
        navigate('/memory-book');
      }, MEMORY_BOOK_TRANSITION_MS);
      timerIdsRef.current.push(openCardId);
    }, PREVIEW_DELAY_MS);
    timerIdsRef.current.push(redirectId);
  };

  const playShutterSound = () => {
    try {
      const AudioContextCtor = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextCtor) {
        return;
      }

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContextCtor();
      }

      const audioContext = audioContextRef.current;
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(180, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(75, audioContext.currentTime + 0.08);

      gainNode.gain.setValueAtTime(0.0001, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.18, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.12);

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.14);
    } catch {
      // Silent fallback if audio is blocked.
    }
  };

  useEffect(() => {
    let stream: MediaStream | null = null;

    const setupCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' },
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch {
        setCameraError('Kamera tidak bisa diakses. Pastikan izin kamera di browser sudah diaktifkan.');
      }
    };

    setupCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }

      clearTimers();
    };
  }, []);

  useEffect(() => {
    if (cameraError || autoRunStartedRef.current) {
      return;
    }

    if (!videoRef.current || !videoRef.current.srcObject) {
      return;
    }

    void startAutoSession();
  }, [cameraError, navigate]);

  const handleContinue = () => {
    if (capturedPhotos.length === 0 || isOpeningCard) {
      return;
    }

    saveCapturedPhotos(capturedPhotos);
    setIsOpeningCard(true);
    const openCardId = window.setTimeout(() => {
      navigate('/memory-book');
    }, MEMORY_BOOK_TRANSITION_MS);
    timerIdsRef.current.push(openCardId);
  };

  return (
    <div className="min-h-screen bg-background text-on-background font-body-standard pb-24">
      <Header title="Tap to begin something small!!" />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <section className="bg-surface-container-low p-6 md:p-8 rounded-lg border border-outline-variant shadow-sm">
          <h1 className="font-headline-md text-headline-md text-primary text-center">Photobooth Capture</h1>
          <p className="text-center text-on-surface-variant mt-2">
            capturing the beauty of you at 21, just as you are.
          </p>

          <div className="mt-6 relative mx-auto max-w-3xl bg-black rounded-lg overflow-hidden border-4 border-white shadow-lg">
            <video ref={videoRef} autoPlay playsInline muted className="w-full h-[420px] object-cover scale-x-[-1]" />

            {flashActive && <div className="absolute inset-0 bg-white animate-pulse" />}

            {countdown !== null && (
              <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                <span className="text-white text-8xl font-headline-lg">{countdown}</span>
              </div>
            )}

            {isAutoRunning && (
              <div className="absolute left-4 top-4 bg-primary-container text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Auto capture aktif
              </div>
            )}
          </div>

          {cameraError && (
            <p className="mt-4 text-center text-error font-semibold">{cameraError}</p>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                autoRunStartedRef.current = false;
                void startAutoSession();
              }}
              disabled={!!cameraError || isAutoRunning}
              className="button-tactile bg-primary-container text-white px-8 py-4 rounded-lg font-label-caps text-label-caps uppercase disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAutoRunning ? 'Sedang memulai...' : 'Memulai sesi otomatis'}
            </button>

            <button
              type="button"
              onClick={() => {
                timerIdsRef.current.forEach((timerId) => window.clearTimeout(timerId));
                timerIdsRef.current = [];
                autoRunStartedRef.current = false;
                setIsAutoRunning(false);
                setCountdown(null);
                setCapturedPhotos([]);
              }}
              className="bg-surface-container-high text-primary border border-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase"
            >
              Ulangi
            </button>

            <button
              type="button"
              onClick={handleContinue}
              disabled={capturedPhotos.length === 0 || isAutoRunning || isOpeningCard}
              className="bg-primary text-white px-8 py-4 rounded-lg font-label-caps text-label-caps uppercase disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Lanjut ke Memory Book
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-on-surface-variant">
            Foto diambil: {capturedPhotos.length}/{MAX_PHOTOS}
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {capturedPhotos.map((photo, index) => (
              <article key={`${photo}-${index}`} className="bg-white p-2 rounded-md shadow-sm border border-outline-variant">
                <img src={photo} alt={`Capture ${index + 1}`} className="w-full h-40 object-cover rounded" />
                <p className="text-center mt-2 text-sm text-on-surface-variant">Capture {index + 1}</p>
              </article>
            ))}
          </div>

          {showPreview && (
            <div className="mt-10 flex justify-center">
              <div className="bg-white p-4 shadow-2xl border border-outline-variant rotate-[-1deg] w-full max-w-sm">
                <div className="relative bg-[#FFFFFF] p-3 shadow-sm border border-stone-200 flex flex-col gap-3">
                  {capturedPhotos.slice(0, MAX_PHOTOS).map((photo, index) => (
                    <div key={`preview-${photo}-${index}`} className="relative">
                      <div className="aspect-square bg-stone-100 overflow-hidden">
                        <img src={photo} alt={`Preview strip ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  ))}
                  <div className="pt-1 text-center">
                    <p className="font-handwriting text-primary text-xl">Summer '23 Memories</p>
                  </div>
                </div>
                <p className="mt-3 text-center text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold">
                  Preview hasil cetak sebelum Memory Book
                </p>
              </div>
            </div>
          )}

          <canvas ref={canvasRef} className="hidden" />
        </section>
      </main>

      {isOpeningCard && (
        <div className="fixed inset-0 z-[120] bg-[#FFF7E8]/95 backdrop-blur-sm flex items-center justify-center px-6">
          <div className="relative open-card-shell">
            <div className="open-card-lid"></div>
            <div className="open-card-base">
              <div className="open-card-inner">
                <p className="font-label-caps text-label-caps text-primary uppercase tracking-[0.2em]">Preparing memory book</p>
                <p className="mt-2 font-retro-handwriting text-2xl text-primary">Membuka halaman kenanganmu...</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoboothCapture;
