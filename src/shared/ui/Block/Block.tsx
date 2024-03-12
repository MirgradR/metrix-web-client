import React from 'react'

import { BlockProps } from './block.model'

import './block.styles.css'

const Block = ({ type = 'small', children }: BlockProps) => {
  return <div className={`content-block ${type}`}>{children}</div>
}

export default Block
