import { ActionsProps } from './actions'
import { ItemsProps } from './items'

export type FolderStructureProps<T extends object> = {
  actions?: ActionsProps
  itemsProps: ItemsProps<T>
}
