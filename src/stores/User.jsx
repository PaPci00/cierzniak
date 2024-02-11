import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useUserStore = create(
    persist(
        (set, get) => ({
            username: null,
            setUsername: (username) => set({ username }),
            logout: () => set({ username: null }),
        }),
        {
            name: "user-store",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
