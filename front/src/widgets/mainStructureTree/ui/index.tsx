import { useEffect, useState } from 'react'

import { api } from 'supporting/api'
import { Structure } from 'supporting/types'
import { FolderStructure } from 'supporting/ui/folderStructure'

export const MainStructureTree = () => {
  const [isLoadingItems, setIsLoadingItems] = useState(false)
  const [items, setItems] = useState<Structure['items']>([])
  const [parentName, setParentName] = useState<string>()
  const [parentIcon, setParentIcon] = useState<string>()

  const handleClickExpand = (id?: string) => {
    if (id) handleSetStructureData(id)

    setIsLoadingItems(true)
    api
      .getStructureResponse(id)
      .then(response => {
        const { items } = response
        setItems(items)
      })
      .catch(e => console.log(e))
      .finally(() => setIsLoadingItems(false))
  }

  const handleSetStructureData = (id: string) => {
    const { name, iconName } = items.find(x => x.id === id) || {}

    if (name && iconName) {
      setParentName(name)
      setParentIcon(iconName)
    }
  }

  const handleClickRow = (id?: string) => {}

  useEffect(() => {
    handleClickExpand()
  }, [])

  return (
    <div>
      <FolderStructure
        items={{
          handleClickRow,
          handleClickExpand,
          name: parentName,
          iconName: parentIcon,
          ...{ isLoadingItems, items },
        }}
      />
    </div>
  )
}
