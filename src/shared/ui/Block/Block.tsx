import classNames from '../../lib/utils/classNames'
import React from 'react'

import { BlockProps } from './block.model'

import './block.styles.css'

const Block = ({ type = 'small', className, children, ...props }: BlockProps) => {
  return (
    <div className={classNames('content-block', `${type}`, className)} {...props}>
      {children}
    </div>
  )
}

export default Block
