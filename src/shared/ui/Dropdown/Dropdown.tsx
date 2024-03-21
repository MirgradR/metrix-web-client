import React from 'react'
import { DropdownProps } from './dropdown.model'
import './dropdown.styles.css'
import Text from '../Text/Text'
import Icon from '../Icon/Icon'
import classNames from '../../lib/utils/classNames'

const Dropdown = ({ data, selectedItem, isOpen, setIsOpen }: DropdownProps) => {
  return (
    <div className="dropdown">
      <button className="dropdown__btn" onClick={() => setIsOpen(!isOpen)}>
        <Text type="paragraph2">{selectedItem}</Text>
        <Icon size="20" icon="chevronDown" />
      </button>

      <ul className={classNames('dropdown__menu', { dropdown__menu_open: isOpen })}>
        {data.map((item, idx) => (
          <li
            className={classNames({ 'dropdown__menu-item_selected': item === selectedItem }, 'dropdown__menu-item')}
            key={idx}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
