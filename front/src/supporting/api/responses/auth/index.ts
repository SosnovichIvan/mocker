import { withMockSucces, withMockError } from 'supporting/api/mock'
import {
  SUCCESS_AUTH_RESPONSE,
  ERROR_AUTH_RESPONSE,
  IS_MOCK_API,
} from 'supporting/constants'

import { API_AUTH_PATH } from '../../constants'
import { http } from '../../http'

export const authResponse = () => {
  if (IS_MOCK_API && SUCCESS_AUTH_RESPONSE)
    return withMockSucces<undefined>(undefined)

  if (IS_MOCK_API && ERROR_AUTH_RESPONSE)
    return withMockError<undefined>(undefined)

  return http.get(API_AUTH_PATH)
}
