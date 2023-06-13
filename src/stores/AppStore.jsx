import { create } from 'zustand';

export const useAppStore = create((set) => ({
  searchInput: '',
  setSearchInput: (value) => set({ searchInput: value }),
}));
