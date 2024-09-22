import { API_GET_STRUCTURE_PATH } from 'supporting/api/constants'
import { http } from 'supporting/api/http'
import { getMockStructureWithID } from 'supporting/api/lib/getMockStructureWithID'
import {
  IS_MOCK_API,
  SUCCESS_GET_STRUCTURE_RESPONSE,
  ERROR_GET_STRUCTURE_RESPONSE,
} from 'supporting/constants'
import { Structure } from 'supporting/types'

import { mockError } from './mock'

export const getStructureResponse = (id?: string): Promise<Structure> => {
  if (IS_MOCK_API) {
    return new Promise((resolve, reject) => {
      if (SUCCESS_GET_STRUCTURE_RESPONSE) resolve(getMockStructureWithID(id))

      if (ERROR_GET_STRUCTURE_RESPONSE) reject(mockError)
    })
  }

  const path = id ? API_GET_STRUCTURE_PATH + `/${id}` : API_GET_STRUCTURE_PATH

  return http.get<Structure>(path)
}
