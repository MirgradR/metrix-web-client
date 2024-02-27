import React from 'react'
import icons from '../../../shared/assets/icons'

interface IconProps {
  icon: keyof typeof icons
  color?: string
}

const Icon: React.FC<IconProps> = ({ icon, color = 'currentColor', ...props }) => {
  const SvgIcon = icons[icon]

  return <SvgIcon style={{ color: color }} {...props} />
}

export default Icon
