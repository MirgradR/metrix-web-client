import React from 'react'
import Avatar from './Avatar'
import { AvatarProps } from './avatar.model'
import '../../styles/theme.css'

export default {
  title: 'Metrix UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      description:
        'Путь к изображению. Поместите в control ссылку на любой url, чтобы увидеть как отрисовывается компонент с изображением'
    },
    size: {
      description: 'Размер аватара',
      control: 'inline-radio'
    }
  }
}

export const Default = (props: AvatarProps) => {
  return <Avatar {...props} />
}

Default.args = {
  image: '',
  size: 'small'
}
