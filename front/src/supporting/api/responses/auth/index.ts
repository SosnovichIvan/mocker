import { withMockSucces, withMockError } from 'supporting/api/mock'
import {
  SUCCESS_AUTH_RESPONSE,
  ERROR_AUTH_RESPONSE,
} from 'supporting/constants'

import { API_AUTH_PATH, WITH_MOCK } from '../../constants'
import { http } from '../../http'

export const authResponse = () => {
  if (WITH_MOCK && SUCCESS_AUTH_RESPONSE)
    return withMockSucces<undefined>(undefined)

  if (WITH_MOCK && ERROR_AUTH_RESPONSE)
    return withMockError<undefined>(undefined)

  return http.get(API_AUTH_PATH)
}
