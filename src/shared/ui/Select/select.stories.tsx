import React from 'react'
import Select from './Select'
import { SelectProps } from './select.module'

import '../../styles/theme.css'

export default {
  title: 'Metrix UI/Select',
  component: Select,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    selectedItem: {
      description: 'Текстовое содержание select',
      control: 'text',
      defaultValue: 'Select'
    },
    type: {
      description: 'Внешний вид select',
      control: 'inline-radio',
      defaultValue: 'default'
    }
  }
}

export const Default = (props: SelectProps) => {
  return <Select {...props} />
}

Default.args = {
  selectedItem: 'Select',
  type: 'default'
}
