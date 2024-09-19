import { ReactNode } from 'react'

export type IconButtonProps = {
  icon: ReactNode
  onClick: () => void
  isLoading?: boolean
  size?: 'large' | 'middle' | 'small'
}
