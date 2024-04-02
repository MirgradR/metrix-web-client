import React from 'react'
import TableFilter from './TableFilter'
import { TableFilterProps } from './tableFilter.module'
import '../../styles/theme.css'

export default {
  title: 'Metrix UI/TableFilter',
  component: TableFilter,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Текстовое содержание элемента',
      control: 'text'
    },
    sortDirection: {
      description: 'Направление',
      control: 'inline-radio'
    }
  }
}

export const Default = (props: TableFilterProps) => {
  return <TableFilter {...props} />
}

Default.args = {
  label: 'Order Date',
  sortDirection: 'down'
}
