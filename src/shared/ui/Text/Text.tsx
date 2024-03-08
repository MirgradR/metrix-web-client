import React from 'react'
import { TextProps } from './text.model'
import '../../styles/theme.css'

const Text: React.FC<TextProps> = ({ tag, children, ...props }: TextProps) => {
  const style = { ...props }
  return React.createElement(tag, { style }, children)
}
export default Text
