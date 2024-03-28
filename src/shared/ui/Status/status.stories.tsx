import React from 'react'
import Status from './Status'
import { StatusProps } from './status.model'

import '../../styles/theme.css'

export default {
  title: 'Metrix UI/Status',
  component: Status,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Тип статуса',
      control: 'inline-radio',
      defaultValue: 'Pending'
    }
  }
}

export const Default = (props: StatusProps) => {
  return <Status {...props} />
}

Default.args = {
  type: 'Pending'
}
