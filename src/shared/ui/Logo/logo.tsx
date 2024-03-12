import React from 'react'
import { LogoProps } from './logo.model'
import './logo.styles.css'

const Logo = ({ size = '52', withText = false }: LogoProps) => {
  return (
    <div className="logo">
      <img width={size} height={size} src="./img/mainLogo.png" />
      {withText && <span className="logo__title">Metrix</span>}
    </div>
  )
}

export default Logo
