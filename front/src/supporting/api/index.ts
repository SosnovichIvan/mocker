import { authResponse } from './responses/auth'
import { pingResponse } from './responses/ping'
import { registerResponse } from './responses/register'
import { getUserResponse } from './responses/user/get'

export { HttpStatus } from './constants/httpStatus'

const api = {
  pingResponse,
  authResponse,
  registerResponse,
  getUserResponse,
}

export { api }

export type { User } from './types'
