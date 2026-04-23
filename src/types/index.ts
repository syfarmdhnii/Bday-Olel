/**
 * Type definitions for the application
 */

export interface IMemoryCard {
  id: string;
  title: string;
  description: string;
  image: string;
  date?: string;
  author?: string;
}

export interface IQuote {
  id: string;
  text: string;
  author: string;
  authorImage?: string;
  date?: string;
}

export interface IPhotoboothStrip {
  id: string;
  photos: string[];
  caption: string;
  date?: string;
}

export interface IMemoryEntry {
  id: string;
  entryNumber: number;
  title: string;
  content: string;
  photos?: IPhotoboothStrip;
  date?: string;
}
