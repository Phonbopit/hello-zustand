import create from 'zustand'
import { persist } from 'zustand/middleware'

const counterStore = (set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 }))
})

export const useCounterStore = create(counterStore)

const themeStore = persist(
  (set) => ({
    color: '#222',
    backgroundColor: '#ff0000',
    setColor: (color) => set(() => ({ color })),
    setBackgroundColor: (color) => set(() => ({ backgroundColor: color }))
  }),
  { name: 'my-theme' }
)

export const useThemeStore = create(themeStore)
