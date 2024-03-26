import React from 'react'
import { DropdownProps } from './dropdown.model'
import './dropdown.styles.css'
import Select from '../Select/Select'
import Option from '../Option/Option'

const Dropdown = ({ data, isOpen, setIsOpen, selectedItem, selectItem }: DropdownProps) => {
  return (
    <div className="dropDown">
      <Select selectedItem={selectedItem} isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen && (
        <ul className="dropdown__list">
          {data.map((option, idx) => (
            <Option key={idx} value={option} isActive={selectedItem === option} selectItem={selectItem} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
