import React from 'react'

import { BlockProps } from './block.model'

import './block.styles.css'

const Block = ({ children }: BlockProps) => {
  return <div className="content-block">{children}</div>
}

export default Block
