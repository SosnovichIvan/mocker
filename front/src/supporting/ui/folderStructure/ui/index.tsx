import { Actions } from './actions'
import { Items } from './items'

import { FolderStructureProps } from './index.types'

export const FolderStructure = <T extends object>(
  props: FolderStructureProps<T>,
) => {
  const { actions, itemsProps } = props

  return (
    <div>
      {actions && <Actions {...actions} />}
      <Items<T> {...{ ...itemsProps }} />
    </div>
  )
}
