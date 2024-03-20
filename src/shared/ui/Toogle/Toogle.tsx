import React from 'react'
import { ToogleProps } from './toogle.model'
import './toogle.styles.css'

export default function Toogle({
  labelLeft = null,
  labelRight = null,
  description = null,
  format = 'slim'
}: ToogleProps) {
  return (
    <>
      <label className="toogle">
        <input type="checkbox" />
        {labelLeft && <span className="label">{labelLeft}</span>}
        <span className={`switch switch_${format}`}></span>
        {labelRight && <span className="label">{labelRight}</span>}
      </label>
      {description && <span className="description">{description}</span>}
    </>
  )
}
