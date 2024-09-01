import { withMockSucces, withMockError } from 'supporting/api/mock'
import {
  SUCCESS_GET_USER_RESPONSE,
  ERROR_GET_USER_RESPONSE,
} from 'supporting/constants'

import { mockUser } from './mock'

import { API_USER_PATH, WITH_MOCK } from '../../../constants'
import { http } from '../../../http'
import { User } from '../../../types'

export const getUserResponse = () => {
  if (WITH_MOCK && SUCCESS_GET_USER_RESPONSE)
    return withMockSucces<User>(mockUser)

  if (WITH_MOCK && ERROR_GET_USER_RESPONSE) return withMockError<User>(mockUser)

  return http.get<User>(API_USER_PATH)
}
