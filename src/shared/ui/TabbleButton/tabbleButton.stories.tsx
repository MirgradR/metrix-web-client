import React from 'react'

import Icon from '../Icon/Icon'
import icons from '../Icon/assets'
import '../../styles/theme.css'
import { TabbleButtonProps } from './tabbleButton.model'
import TableButton from './TabbleButton'

export default {
  title: 'Metrix UI/TableButton',
  component: TableButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
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
} & TabbleButtonProps

export const Default = (args: Props) => {
  const { storybook_iconLeft, storybook_iconRight, ...props } = args

  return (
    <TableButton
      {...props}
      iconLeft={storybook_iconLeft === 'none' ? null : <Icon icon={storybook_iconLeft} />}
      iconRight={storybook_iconRight === 'none' ? null : <Icon icon={storybook_iconRight} />}
    />
  )
}

Default.args = {
  label: 'Label',
  disabled: false,
  storybook_iconLeft: 'none',
  storybook_iconRight: 'none'
}
