import React from 'react'
import { TabbleButtonProps } from './tabbleButton.model'
import './tabbleButton.stiles.css'

const TableButton = ({ label, iconLeft = null, iconRight = null, ...props }: TabbleButtonProps) => {
  return (
    <button className="button" {...props}>
      {Boolean(iconLeft) && iconLeft}
      {label}
      {Boolean(iconRight) && iconRight}
    </button>
  )
}

export default TableButton
