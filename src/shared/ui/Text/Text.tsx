import React from 'react'
import { tagNamesByType, TextProps } from './text.model'
import './text.styles.css'

const Text: React.FC<TextProps> = ({ tagName, type, weight = 'regular', children, ...additionalProps }: TextProps) => {
  const props = {
    className: [`${type}`, `${type}--${weight}`].join(' '),
    ...additionalProps
  }
  return React.createElement(tagName || tagNamesByType[type], props, children)
}

export default Text
