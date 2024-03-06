import icons from '@/shared/ui/Icon/assets'

export interface IconProps {
  icon?: keyof typeof icons
  color?: string
  size?: '16' | '20' | '24' | '36' | '60'
  className?: string
}
