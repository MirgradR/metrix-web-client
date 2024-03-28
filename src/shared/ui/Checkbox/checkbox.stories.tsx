import React from 'react'
import Checkbox from './Checkbox'
import { CheckboxProps } from './checkbox.model'
import '../../styles/theme.css'

export default {
  title: 'Metrix UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Выберите тип',
      control: 'inline-radio'
    },
    labelLeft: {
      description: 'Label слева от checkbox, который можно изменить',
      control: 'text'
    },
    labelRight: {
      description: 'Label справа от checkbox, который можно изменить',
      control: 'text'
    },
    description: {
      description: 'Description под checkbox, который можно изменить',
      control: 'text'
    }
  }
}

export const Default = (props: CheckboxProps) => {
  return <Checkbox {...props} />
}

Default.args = {
  type: 'checkbox',
  labelLeft: 'label',
  labelRight: 'label',
  description: 'Description goes here'
}
