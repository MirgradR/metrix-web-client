import React from 'react'
import Icon from '../Icon/Icon'
import { TableFilterProps } from './tableFilter.module'
import classNames from '../../lib/utils/classNames'
import './tableFilter.styles.css'

const TableFilter = ({ label, sortDirection = 'down' }: TableFilterProps) => {
  return (
    <div className="filter">
      <span>{label}</span>
      <span className={classNames('icon', { 'icon-reverse': sortDirection === 'up' })}>
        <Icon size="16" icon="sort" />
      </span>
    </div>
  )
}

export default TableFilter
