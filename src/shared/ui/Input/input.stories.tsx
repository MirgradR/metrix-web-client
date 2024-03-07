import React from 'react'
import { InputProps } from './input.model'
import icons from '../Icon/assets'
import Icon from '../Icon/Icon'
import Input from './Input'

export default {
  title: 'Metrix UI/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password']
    },
    width: {
      control: { type: 'select' },
      options: ['375px']
    },
    storybook_iconLeft: {
      description: 'Иконка слева ',
      control: 'select',
      options: ['none', ...Object.keys(icons)]
    },
    storybook_iconRight: {
      description: 'Иконка справа',
      control: 'select',
      options: ['none', ...Object.keys(icons)]
    }
  }
}

type Props = {
  storybook_iconLeft: keyof typeof icons & 'none'
  storybook_iconRight: keyof typeof icons & 'none'
} & InputProps

export const Default = (args: Props) => {
  const { storybook_iconLeft, storybook_iconRight, ...props } = args
  return (
    <Input
      {...props}
      rightIcon={storybook_iconLeft === 'none' ? null : <Icon icon={storybook_iconLeft} />}
      leftIcon={storybook_iconRight === 'none' ? null : <Icon icon={storybook_iconRight} />}
    />
  )
}

Default.args = {
  type: 'text',
  width: '375px',
  placeholder: 'Email Address',
  storybook_iconLeft: 'none',
  storybook_iconRight: 'none'
}
