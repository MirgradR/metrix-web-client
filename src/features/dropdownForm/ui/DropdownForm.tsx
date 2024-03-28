import React, { useRef, useState } from 'react'
import useOnClickOutside from '@/shared/lib/hooks/useOnClickOutside'
import Dropdown from '@/shared/ui/Dropdown/Dropdown'
import { DropdownFromProps } from './dropdownForm.model'

const DropdownForm = ({ data = ['Nanny’s Shop', 'Colors Shop', 'Flowers Shop'] }: DropdownFromProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(data[1])
  const dropdownRef = useRef<HTMLDivElement>(null)
  const closeTheDropdown = () => setIsOpen(false)

  const selectItem = (item: string) => {
    setSelectedItem(item)
    setIsOpen(false)
  }

  useOnClickOutside(dropdownRef, closeTheDropdown)

  return (
    <div ref={dropdownRef}>
      <Dropdown data={data} isOpen={isOpen} setIsOpen={setIsOpen} selectedItem={selectedItem} selectItem={selectItem} />
    </div>
  )
}

export default DropdownForm
