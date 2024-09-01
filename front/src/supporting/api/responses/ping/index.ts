import { withMockSucces, withMockError } from 'supporting/api/mock'
import {
  SUCCESS_PING_RESPONSE,
  ERROR_PING_RESPONSE,
} from 'supporting/constants'

import { API_PING_PATH, WITH_MOCK } from '../../constants'
import { http } from '../../http'

export const pingResponse = () => {
  if (WITH_MOCK && SUCCESS_PING_RESPONSE)
    return withMockSucces<undefined>(undefined)

  if (WITH_MOCK && ERROR_PING_RESPONSE)
    return withMockError<undefined>(undefined)

  return http.get(API_PING_PATH)
}
