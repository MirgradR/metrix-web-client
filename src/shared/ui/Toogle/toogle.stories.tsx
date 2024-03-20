import React from 'react'
import Toogle from './Toogle'
import { ToogleProps } from './toogle.model'

import '../../styles/theme.css'

export default {
  title: 'Metrix UI/Toogle',
  component: Toogle,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    format: {
      description: 'Формат внешнего вида toogle',
      control: 'inline-radio'
    },
    labelLeft: {
      description: 'Label слева от toogle, который можно изменить',
      control: 'text'
    },
    labelRight: {
      description: 'Label справа от toogle, который можно изменить',
      control: 'text'
    },
    description: {
      description: 'Description под toogle, который можно изменить',
      control: 'text'
    }
  }
}

export const Default = (props: ToogleProps) => {
  return <Toogle {...props} />
}

Default.args = {
  format: 'slim',
  labelLeft: 'label',
  labelRight: 'label',
  description: 'Description goes here'
}
