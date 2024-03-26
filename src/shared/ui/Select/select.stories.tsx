import React from 'react'
import Select from './Select'
import { SelectProps } from './select.module'

import '../../styles/theme.css'

export default {
  title: 'Metrix UI/Select',
  component: Select,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export const Default = (props: SelectProps) => {
  return <Select {...props} />
}

Default.args = {}
