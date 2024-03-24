import React from 'react'
import Option from './Option'
import { OptionProps } from './option.module'

import '../../styles/theme.css'

export default {
  title: 'Metrix UI/Option',
  component: Option,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: 'Текстовое значение option',
      control: 'text'
    },
    isActive: {
      description: 'обозначение активного элемента',
      boolean: [true, false]
    }
  }
}

export const Default = (props: OptionProps) => {
  return <Option {...props} />
}

Default.args = {
  value: 'option',
  isActive: false
}
