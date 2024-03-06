import React from 'react'
import { LogoProps } from './logo.model'
import './logo.styles.css'
import Icon from '../Icon/Icon'

export default function Logo({ logoSize = '52', withText = true, fontSize = 20 }: LogoProps) {
  return (
    <div className="logo">
      <Icon icon={'logo'} size={logoSize} viewBox={'0 0 52 52'} />
      {withText && (
        <span className="name" style={{ fontSize }}>
          Metrix
        </span>
      )}
    </div>
  )
}
