import { IconType } from '@/shared/ui/Icon/icon.model'

export interface NavItemProps {
  icon: IconType
  link?: string
  isActive?: boolean
  label?: string
  notification?: number
}
