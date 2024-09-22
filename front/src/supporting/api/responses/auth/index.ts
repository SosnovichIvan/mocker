import {
  SUCCESS_AUTH_RESPONSE,
  ERROR_AUTH_RESPONSE,
  IS_MOCK_API,
} from 'supporting/constants'

import { mockError } from './mock'

import { API_AUTH_PATH } from '../../constants'
import { http } from '../../http'

export const authResponse = () => {
  if (IS_MOCK_API) {
    return new Promise((resolve, reject) => {
      if (SUCCESS_AUTH_RESPONSE) resolve(undefined)

      if (ERROR_AUTH_RESPONSE) reject(mockError)
    })
  }

  return http.get(API_AUTH_PATH)
}
