import create from "zustand";

const useTokenStore = create((set: ({ value }: any) => void) => ({
  isToken: null,
  token: null,
  setToken: (token: string) => set({ token }),
}));

export default useTokenStore;
