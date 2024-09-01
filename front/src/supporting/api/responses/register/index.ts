import { withMockSucces, withMockError } from 'supporting/api/mock'
import {
  SUCCESS_REGISTER_RESPONSE,
  ERROR_REGISTER_RESPONSE,
} from 'supporting/constants'

import { API_REGISTER_PATH, WITH_MOCK } from '../../constants'
import { http } from '../../http'

export const registerResponse = () => {
  if (WITH_MOCK && SUCCESS_REGISTER_RESPONSE)
    return withMockSucces<undefined>(undefined)

  if (WITH_MOCK && ERROR_REGISTER_RESPONSE)
    return withMockError<undefined>(undefined)

  return http.get(API_REGISTER_PATH)
}
