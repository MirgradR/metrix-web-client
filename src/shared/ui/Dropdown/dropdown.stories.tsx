import React from 'react'
import Dropdown from './Dropdown'
import { DropdownProps } from './dropdown.model'

import '../../styles/theme.css'

export default {
  title: 'Metrix UI/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'Список элементов меню'
    },
    selectedItem: {
      description: 'Выбранный элемент меню',
      control: 'text'
    },
    isOpen: {
      description: 'Состояние открытия меню',
      boolean: [true, false]
    },
    setIsOpen: {
      description: 'Функция, меняющая состояние открытия меню'
    }
  }
}

export const Default = (args: DropdownProps) => {
  return <Dropdown {...args} />
}

Default.args = {
  data: ['Nanny’s Shop', 'Colors Shop', 'Flowers Shop'],
  isOpen: false,
  setIsOpen: (isOpen: boolean) => !isOpen,
  selectedItem: 'Nanny’s Shop'
}
