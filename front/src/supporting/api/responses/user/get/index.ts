import { withMockSucces, withMockError } from 'supporting/api/mock'
import {
  SUCCESS_GET_USER_RESPONSE,
  ERROR_GET_USER_RESPONSE,
  IS_MOCK_API,
} from 'supporting/constants'
import { User } from 'supporting/types'

import { mockUser } from './mock'

import { API_USER_PATH } from '../../../constants'
import { http } from '../../../http'

export const getUserResponse = () => {
  if (IS_MOCK_API && SUCCESS_GET_USER_RESPONSE)
    return withMockSucces<User>(mockUser)

  if (IS_MOCK_API && ERROR_GET_USER_RESPONSE)
    return withMockError<User>(mockUser)

  return http.get<User>(API_USER_PATH)
}
