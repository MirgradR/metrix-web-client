import React, { ReactNode } from 'react'

export interface BlockProps extends React.ComponentProps<'div'> {
  type?: 'small' | 'big'
  children: ReactNode
}
