import icons from './assets'

export interface IconProps {
  icon: keyof typeof icons
  color?: string
  size?: '16' | '20' | '24' | '36' | '60'
  className?: string
}
