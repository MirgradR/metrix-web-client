import React from 'react'

import classNames from '../../lib/utils/classNames'
import { tagNamesByType, TextProps } from './text.model'

import './text.styles.css'

const Text: React.FC<TextProps> = ({ tagName, type, weight = 'regular', children, className, ...props }: TextProps) => {
  return React.createElement(
    tagName || tagNamesByType[type],
    { className: classNames(`${type}`, `${type}--${weight}`, className), ...props },
    children
  )
}

export default Text
