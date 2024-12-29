import { create } from 'zustand'
import { AuthStore, AuthComponent } from '../interfaces/auth.store.interfaces.ts';

const useAuthStore = create<AuthStore>((set) => ({
    showAuthComponent: AuthComponent.LOGIN,
    setShowAuthComponent: (showAuthComponent) => set({ showAuthComponent }),
    userCredential: null,
    setUserCredential: (userCredential) => set({ userCredential }),
}))

export default useAuthStore;