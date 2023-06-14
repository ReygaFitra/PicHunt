import { create } from 'zustand';

export const useAppStore = create((set) => ({
  searchInput: '',
  images: [],
  setSearchInput: (value) => set({ searchInput: value }),
  setImages: (newImages) => set({ images: newImages }),
}));
