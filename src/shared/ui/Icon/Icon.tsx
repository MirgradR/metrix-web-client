import icons from '@/shared/ui/Icon/assets'
import { IconProps } from '@/shared/ui/Icon/Icon.model'
import React from 'react'
import './icon.styles.css'

const Icon: React.FC<IconProps> = ({ icon, color, className, size, ...props }) => {
  const SvgIcon = icons[icon]
  const iconStyle = {
    color: color,
    width: size,
    height: size
  }

  return <SvgIcon style={{ ...iconStyle }} className={className} {...props} />
}

export default Icon
