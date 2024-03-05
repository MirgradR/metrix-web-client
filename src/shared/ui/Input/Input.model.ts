import React from 'react'

type InputElementProps = React.ComponentProps<'input'>

export type InputVariantTypes = 'text' | 'password'

export interface InputProps extends InputElementProps {
  variant: InputVariantTypes
  placeholder?: string
  size?: 375
  disabled?: boolean
  className?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  onClick?: () => void
}
