import React from 'react'

type InputElementProps = React.ComponentProps<'input'>

export type InputTypes = 'text' | 'password'
export type InputWidth = '375px'

export interface InputProps extends InputElementProps {
  type: InputTypes
  width: InputWidth
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}
