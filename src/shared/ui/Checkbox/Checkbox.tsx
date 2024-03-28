import React from 'react'
import { CheckboxProps } from './checkbox.model'
import './checkbox.styles.css'
import classNames from '../../lib/utils/classNames'

export default function Checkbox({
  type = 'checkbox',
  labelLeft = null,
  labelRight = null,
  description = null
}: CheckboxProps) {
  return (
    <>
      <label className="control">
        <input type="checkbox" />
        {labelLeft && <span className="label">{labelLeft}</span>}
        <span className={classNames('checkbox', { 'checkbox-tick': type === 'checkbox' })}></span>
        {labelRight && <span className="label">{labelRight}</span>}
      </label>
      {description && <span className="description">{description}</span>}
    </>
  )
}
