import { authResponse } from './responses/auth'
import { pingResponse } from './responses/ping'
import { registerResponse } from './responses/register'
import { getStructureResponse } from './responses/structure/get'
import { getUserResponse } from './responses/user/get'

export { HttpStatus } from './constants/httpStatus'

const api = {
  pingResponse,
  authResponse,
  registerResponse,
  getUserResponse,
  getStructureResponse,
}

export { api }
