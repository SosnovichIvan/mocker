import { Button } from 'antd'

import { IconButtonProps } from './index.types'

export const IconButton = (props: IconButtonProps) => {
  const { icon, onClick, isLoading = false, size = 'middle' } = props

  return <Button loading={isLoading} {...{ icon, onClick, size }} />
}
