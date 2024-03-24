import React from 'react'
import { AvatarProps } from './avatar.model'
import './avatar.styles.css'

const Avatar = ({ image, size = 'large' }: AvatarProps) => {
  if (image) {
    return <img src={image} alt="avatar" className={`avatar avatar_${size}`} />
  }
  return <div className={`skeleton skeleton_${size}`}></div>
}

export default Avatar
