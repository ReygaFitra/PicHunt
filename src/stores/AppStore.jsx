import { create } from 'zustand';

export const useAppStore = create((set) => ({
  searchInput: '',
  images: [],
  pages: 1,
  searchPages: 1,
  setSearchInput: (value) => set({ searchInput: value }),
  setImages: (newImages) => set({ images: newImages }),
  setPages: (newPages) => set({ pages: newPages }),
  setSearchPages: (newPages) => set({ searchPages: newPages }),
}));
