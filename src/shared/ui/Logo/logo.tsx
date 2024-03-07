import React from 'react'
import { LogoProps } from './logo.model'
import './logo.styles.css'
import Icon from '../Icon/Icon'

const Logo = ({ size = '52', withText = true }: LogoProps) => {
  return (
    <div className="logo">
      <Icon icon={'logo'} size={size} viewBox={'0 0 52 52'} />
      {withText && <span className="logo__title">Metrix</span>}
    </div>
  )
}

export default Logo
