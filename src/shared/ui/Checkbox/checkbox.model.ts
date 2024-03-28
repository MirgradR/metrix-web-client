import React from 'react'

export interface CheckboxProps extends React.ComponentProps<'div'> {
  type: 'checkbox' | 'radio'
  labelLeft?: string
  labelRight?: string
  description?: string
}
