import { withMockSucces, withMockError } from 'supporting/api/mock'
import {
  SUCCESS_REGISTER_RESPONSE,
  ERROR_REGISTER_RESPONSE,
  IS_MOCK_API,
} from 'supporting/constants'

import { API_REGISTER_PATH } from '../../constants'
import { http } from '../../http'

export const registerResponse = () => {
  if (IS_MOCK_API && SUCCESS_REGISTER_RESPONSE)
    return withMockSucces<undefined>(undefined)

  if (IS_MOCK_API && ERROR_REGISTER_RESPONSE)
    return withMockError<undefined>(undefined)

  return http.get(API_REGISTER_PATH)
}
