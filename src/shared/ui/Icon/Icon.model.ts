import icons from './assets'

type IconType = keyof typeof icons

type IconSize = '16' | '20' | '24' | '36' | '60'

export interface IconProps {
  icon?: IconType
  color?: string
  size?: IconSize
  preserveAspectRatio?: string
  viewBox?: string
  fill?: string
}
