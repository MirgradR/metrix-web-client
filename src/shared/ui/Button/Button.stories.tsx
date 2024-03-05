import Button, { ButtonProps } from './Button'
import Icon from '../Icon/Icon'

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
      options: ['none', 'icon']
    },
    storybook_iconRight: {
      description: 'Иконка справа от названия',
      control: 'select',
      options: ['none', 'icon']
    }
  }
}

type Props = {
  storybook_iconLeft: 'Icon' & 'none'
  storybook_iconRight: 'Icon' & 'none'
} & ButtonProps

export const Default = (args: Props) => {
  const { storybook_iconLeft, storybook_iconRight, ...props } = args

  return (
    <Button
      {...props}
      iconLeft={storybook_iconLeft === 'none' ? null : <Icon />}
      iconRight={storybook_iconRight === 'none' ? null : <Icon />}
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
