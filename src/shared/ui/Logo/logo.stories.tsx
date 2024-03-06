import Logo from './logo'
import React from 'react'
import '../../styles/theme.css'

type Props = {
  icon: string
  size?: '16' | '20' | '24' | '36' | '52' | '60'
  withText: boolean
}

export default {
  title: 'Metrix UI/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    size: {
      type: 'number',
      description: 'Размер логотипа'
    },
    withText: {
      type: 'boolean',
      description: 'С текстовым названием или без'
    }
  }
}

const Template = (args: Props) => <Logo icon="logo" {...args} />

export const Default = Template.bind({})

Default.args = {
  size: 52,
  withText: true
}
