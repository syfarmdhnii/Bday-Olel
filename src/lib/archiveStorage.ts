export interface PrintedCard {
  id: string;
  title: string;
  coverImage: string;
  photos: string[];
  createdAt: string;
}

const ARCHIVE_KEY = 'printed-cards-history';

export const getPrintedCards = (): PrintedCard[] => {
  try {
    const raw = localStorage.getItem(ARCHIVE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as PrintedCard[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const savePrintedCard = (card: PrintedCard): void => {
  const current = getPrintedCards();
  const next = [card, ...current].slice(0, 30);
  localStorage.setItem(ARCHIVE_KEY, JSON.stringify(next));
};

export const deletePrintedCard = (cardId: string): PrintedCard[] => {
  const next = getPrintedCards().filter((card) => card.id !== cardId);
  localStorage.setItem(ARCHIVE_KEY, JSON.stringify(next));
  return next;
};

export const clearPrintedCards = (): void => {
  localStorage.removeItem(ARCHIVE_KEY);
};
