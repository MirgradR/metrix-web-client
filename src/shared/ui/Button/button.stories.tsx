import React from 'react'
import Button from './Button'
import Icon from '../Icon/Icon'

import { ButtonProps } from './button.model'
import icons from '../Icon/assets'

import '../../styles/theme.css'

export default {
  title: 'Metrix UI/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Вариант внешнего вида кнопки',
      control: 'inline-radio',
      defaultValue: 'primary'
    },
    size: {
      description: 'Вариант размера кнопки',
      control: 'inline-radio',
      options: [180, 375],
      defaultValue: 180
    },
    label: {
      description: 'Название кнопки, которое можно изменить',
      control: 'text'
    },
    className: {
      control: 'text'
    },
    disabled: {
      description: 'Состояние отключенной кнопки',
      control: 'boolean',
      options: [false, true],
      defaultValue: false
    },
    storybook_iconLeft: {
      description: 'Иконка слева от названия',
      control: 'select',
      options: ['none', ...Object.keys(icons)]
    },
    storybook_iconRight: {
      description: 'Иконка справа от названия',
      control: 'select',
      options: ['none', ...Object.keys(icons)]
    }
  }
}

type Props = {
  storybook_iconLeft: keyof typeof icons & 'none'
  storybook_iconRight: keyof typeof icons & 'none'
} & ButtonProps

export const Default = (args: Props) => {
  const { storybook_iconLeft, storybook_iconRight, ...props } = args

  return (
    <Button
      {...props}
      iconLeft={storybook_iconLeft === 'none' ? null : <Icon icon={storybook_iconLeft} />}
      iconRight={storybook_iconRight === 'none' ? null : <Icon icon={storybook_iconRight} />}
    />
  )
}

Default.args = {
  label: 'Button',
  variant: 'primary',
  disabled: false,
  size: 180,
  storybook_iconLeft: 'none',
  storybook_iconRight: 'none'
}
