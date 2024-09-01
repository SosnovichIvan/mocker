import { User } from 'supporting/api'

export type UserState = {
  user: User | null
  isAuth: boolean
  setUser: (user: User) => void
  cleanUser: () => void
  getIsAuth: () => boolean
}
