import { API_GET_STRUCTURE_PATH } from 'supporting/api/constants'
import { http } from 'supporting/api/http'
import { getMockStructureWithID } from 'supporting/api/lib/getMockStructureWithID'
import { withMockError, withMockSucces } from 'supporting/api/mock'
import {
  IS_MOCK_API,
  SUCCESS_GET_STRUCTURE_RESPONSE,
  ERROR_GET_STRUCTURE_RESPONSE,
} from 'supporting/constants'
import { Structure } from 'supporting/types'

export const getStructureResponse = (id?: string) => {
  if (IS_MOCK_API && SUCCESS_GET_STRUCTURE_RESPONSE)
    return withMockSucces(getMockStructureWithID(id))

  if (IS_MOCK_API && ERROR_GET_STRUCTURE_RESPONSE)
    return withMockError(getMockStructureWithID(id))

  const path = id ? API_GET_STRUCTURE_PATH + `/${id}` : API_GET_STRUCTURE_PATH

  return http.get<Structure>(path)
}
