import React from 'react'
export type InputTypes = 'text' | 'password'

export interface InputProps extends React.ComponentProps<'input'> {
  type: InputTypes
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}
