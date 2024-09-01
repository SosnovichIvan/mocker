import { User } from 'supporting/api'
import { create } from 'zustand'

import { UserState } from './index.types'

export const userState = create<UserState>()((set, get) => ({
  isAuth: false,
  user: null,
  setUser: (user: User) => set({ isAuth: true, user }),
  cleanUser: () => set({ isAuth: false, user: null }),
  getIsAuth: () => get().isAuth,
}))
