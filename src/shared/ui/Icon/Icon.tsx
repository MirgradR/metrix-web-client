import React from 'react'
import { IconProps } from './Icon.model'
import icons from './assets'

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
