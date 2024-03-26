import React from 'react'
import './select.styles.css'
import { SelectProps } from './select.module'
import Icon from '../Icon/Icon'
import Text from '../Text/Text'

export default function Select({ selectedItem, isOpen, setIsOpen }: SelectProps) {
  return (
    <button className="select" onClick={() => setIsOpen(!isOpen)}>
      <Text type="paragraph2">{selectedItem}</Text>
      <Icon size="24" icon="chevronDown" />
    </button>
  )
}
