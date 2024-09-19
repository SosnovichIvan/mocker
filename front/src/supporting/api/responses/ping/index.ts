import { withMockSucces, withMockError } from 'supporting/api/mock'
import {
  SUCCESS_PING_RESPONSE,
  ERROR_PING_RESPONSE,
  IS_MOCK_API,
} from 'supporting/constants'

import { API_PING_PATH } from '../../constants'
import { http } from '../../http'

export const pingResponse = () => {
  if (IS_MOCK_API && SUCCESS_PING_RESPONSE)
    return withMockSucces<undefined>(undefined)

  if (IS_MOCK_API && ERROR_PING_RESPONSE)
    return withMockError<undefined>(undefined)

  return http.get(API_PING_PATH)
}
