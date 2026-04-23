const CAPTURE_KEY = 'memorybook-captured-photos';

export const saveCapturedPhotos = (photos: string[]): void => {
  sessionStorage.setItem(CAPTURE_KEY, JSON.stringify(photos));
};

export const getCapturedPhotos = (): string[] => {
  try {
    const raw = sessionStorage.getItem(CAPTURE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as string[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const clearCapturedPhotos = (): void => {
  sessionStorage.removeItem(CAPTURE_KEY);
};
