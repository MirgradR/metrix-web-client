import Logo from './logo'
import React from 'react'
import '../../styles/theme.css'

type Props = {
  logoSize?: number
  withText: boolean
  fontSize?: number
}

export default {
  title: 'Metrix UI/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    logoSize: {
      type: 'number',
      description: 'Размер логотипа'
    },
    withText: {
      type: 'boolean',
      description: 'С текстовым названием или без'
    },
    fontSize: {
      type: 'number',
      description: 'Размер текста'
    }
  }
}

const Template = (args: Props) => <Logo {...args} />

export const Default = Template.bind({})

Default.args = {
  logoSize: 52,
  withText: true,
  fontSize: 20
}
