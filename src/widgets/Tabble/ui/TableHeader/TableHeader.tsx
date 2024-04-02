import React from 'react'
import Text from '@/shared/ui/Text/Text'
import styles from './styles.module.css'
import TableButton from '@/shared/ui/TabbleButton/TabbleButton'
import Icon from '@/shared/ui/Icon/Icon'
import { DropdownForm } from '@/features/product/dropdownForm'
import Input from '@/shared/ui/Input/Input'

const TabbleHeader = () => {
  return (
    <div className={styles.theader}>
      <Text type="paragraph1">Customers</Text>
      <div className={styles.bar}>
        <Input type="text" placeholder="search" rightIcon={<Icon icon="search" />} />
        <TableButton label="filter" iconLeft={<Icon icon="filter" size="16" />} />
        <TableButton label="filter" iconLeft={<Icon icon="calendar" size="16" />} />
        <TableButton label="share" iconLeft={<Icon icon="send" size="16" />} />
        <DropdownForm data={['Bulk Action', 'Edit', 'Move to Trash', 'Change o published']} />
      </div>
    </div>
  )
}

export default TabbleHeader
