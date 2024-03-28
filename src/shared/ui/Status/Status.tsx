import React from 'react'
import './status.styles.css'
import { StatusProps } from './status.model'

const Status = ({ type }: StatusProps) => {
  return <div className={`status ${type}`}>{type}</div>
}

export default Status
