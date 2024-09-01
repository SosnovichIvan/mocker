/* eslint-disable no-undef */

import { DELAY_MOCK_API } from '../constants'

export const withMockSucces = <T>(data: T) => {
  return new Promise<T>(resolve => {
    setTimeout(() => {
      return resolve(data)
    }, DELAY_MOCK_API)
  })
}

export const withMockError = <T>(data: T) => {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      return reject(data)
    }, DELAY_MOCK_API)
  })
}
