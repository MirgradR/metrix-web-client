import React from 'react'

export type ButtonVariantTypes = 'primary' | 'primary_outline' | 'green' | 'green_outline' | 'danger' | 'danger_outline'

export interface ButtonProps extends React.ComponentProps<'button'> {
  label: string
  size?: 180 | 375
  variant?: ButtonVariantTypes
  className?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}
