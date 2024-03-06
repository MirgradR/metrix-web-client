import React from 'react'
import { IconProps } from './Icon.model'
import icons from './assets'

const Icon: React.FC<IconProps> = ({
  icon,
  size = '24',
  color,
  preserveAspectRatio = 'xMidYMid meet',
  viewBox = '0 0 24 24',
  ...props
}) => {
  const SvgIcon = icons[icon]
  return (
    <SvgIcon
      height={size}
      width={size}
      color={color}
      preserveAspectRatio={preserveAspectRatio}
      viewBox={viewBox}
      {...props}
    />
  )
}

export default Icon
