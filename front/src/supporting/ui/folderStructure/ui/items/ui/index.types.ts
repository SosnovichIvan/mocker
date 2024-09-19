export type ItemsProps<T extends object> = {
  getFolderStructure?: (name: string) => T[]
  items?: T[]
  isLoadingItems?: boolean
}
