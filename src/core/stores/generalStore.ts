import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { GeneralStore } from '../interfaces/general.store.interface';

const useGeneralStore = create<GeneralStore>()(
  persist(
    (set) => ({
      isSidebarCollapsed: false,
      setIsSidebarCollapsed: (isCollapsed: boolean) =>
        set({ isSidebarCollapsed: isCollapsed }),
    }),
    {
      name: 'general-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useGeneralStore;
