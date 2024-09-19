import { API_GET_STRUCTURE_PATH } from 'supporting/api/constants'
import { http } from 'supporting/api/http'
import { getMockStructureWithID } from 'supporting/api/lib/getMockStructureWithID'
import { Structure } from 'supporting/api/types'
import {
  IS_MOCK_API,
  SUCCESS_GET_STRUCTURE_RESPONSE,
  ERROR_GET_STRUCTURE_RESPONSE,
} from 'supporting/constants'

export const getStructureResponse = (id?: string) => {
  if (IS_MOCK_API && SUCCESS_GET_STRUCTURE_RESPONSE)
    return getMockStructureWithID()

  if (IS_MOCK_API && ERROR_GET_STRUCTURE_RESPONSE)
    return getMockStructureWithID()

  return http.get<Structure>(API_GET_STRUCTURE_PATH + id || '')
}
