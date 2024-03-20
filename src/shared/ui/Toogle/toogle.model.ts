import React from 'react'

export interface ToogleProps extends React.ComponentProps<'div'> {
  format: 'slim' | 'bold'
  labelLeft?: string
  labelRight?: string
  description?: string
}
