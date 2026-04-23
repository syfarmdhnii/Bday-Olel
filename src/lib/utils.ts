/**
 * Utility functions and helpers
 */

export const getRandomRotation = (min: number = -2, max: number = 2): number => {
  return Math.random() * (max - min) + min;
};

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const getImageWithGrain = (url: string, _grainOpacity: number = 0.1): string => {
  return url;
};

/**
 * Generate subtle rotation for scrapbook aesthetic
 */
export const generateScrapbookRotation = (): {rotate: string, origin: string} => {
  const rotation = getRandomRotation();
  return {
    rotate: `${rotation}deg`,
    origin: 'center center',
  };
};
