import React from 'react'
import { IconProps } from './Icon.model'
import icons from './assets'

const Icon: React.FC<IconProps> = ({ icon, size = '24', color, preserveAspectRatio, viewBox, fill, ...props }) => {
  const SvgIcon = icons[icon]
  return (
    <SvgIcon
      height={size}
      width={size}
      color={color}
      preserveAspectRatio={preserveAspectRatio}
      fill={fill}
      {...(viewBox && { viewBox })}
      {...props}
    />
  )
}

export default Icon
