import React from 'react'
import { AvatarProps } from './avatar.model'
import './avatar.styles.css'

const Avatar = ({ image = 'https://cs13.pikabu.ru/avatars/883/x883581-1690734471.png', size }: AvatarProps) => {
  return <img src={image} alt="avatar" className={`avatar avatar_${size}`} />
}

export default Avatar
