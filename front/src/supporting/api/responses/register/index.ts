import {
  SUCCESS_REGISTER_RESPONSE,
  ERROR_REGISTER_RESPONSE,
  IS_MOCK_API,
} from 'supporting/constants'

import { mockError } from './mock'

import { API_REGISTER_PATH } from '../../constants'
import { http } from '../../http'

export const registerResponse = () => {
  if (IS_MOCK_API) {
    return new Promise((resolve, reject) => {
      if (SUCCESS_REGISTER_RESPONSE) resolve(undefined)

      if (ERROR_REGISTER_RESPONSE) reject(mockError)
    })
  }

  return http.get(API_REGISTER_PATH)
}
