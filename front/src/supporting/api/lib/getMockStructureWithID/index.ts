import { get } from 'lodash'

import { childrenStructure, parentStrucutre } from './mock'

export const getMockStructureWithID = (id?: string) => {
  if (!id) return parentStrucutre

  return get(childrenStructure, id, {})
}
