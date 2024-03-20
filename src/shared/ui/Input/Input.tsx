import React from 'react'
import './input.styles.css'
import { InputProps } from '@/shared/ui/Input/input.model'

const Input = ({ type = 'text', leftIcon = null, rightIcon = null, ...props }: InputProps) => {
  return (
    <div className="inputContainer">
      {leftIcon && <div className="iconLeft">{leftIcon}</div>}
      <input type={type} className="input" {...props} />
      {rightIcon && <div className="iconRight">{rightIcon}</div>}
    </div>
  )
}
export default Input
