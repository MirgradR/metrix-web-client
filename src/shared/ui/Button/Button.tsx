import React from 'react'

import './button.css'

export type ButtonVariantTypes = 'primary' | 'primary_outline' | 'green' | 'green_outline' | 'danger' | 'danger_outline'

type ButtonElementProps = React.ComponentProps<'button'>

export interface ButtonProps extends ButtonElementProps {
  label: string
  size?: 180 | 375
  variant?: ButtonVariantTypes
  disabled?: boolean
  className?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  onClick?: () => void
}

const Button = ({
  variant = 'primary',
  size = 180,
  label,
  iconLeft = null,
  iconRight = null,
  className = '',
  ...props
}: ButtonProps) => {
  const btnClasses = ['btn', `btn-${size}`, `btn-${variant}`]
  if (className) {
    btnClasses.push(className)
  }

  return (
    <button type="button" className={btnClasses.join(' ')} {...props}>
      {Boolean(iconLeft) && iconLeft}
      {label}
      {Boolean(iconRight) && iconRight}
    </button>
  )
}

export default Button
