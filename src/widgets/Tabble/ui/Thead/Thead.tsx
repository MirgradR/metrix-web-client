import React from 'react'
import TableFilter from '@/shared/ui/TableFilter/TableFilter'
import styles from './styles.module.css'
import Checkbox from '@/shared/ui/Checkbox/Checkbox'
import { getDataWithoutId } from '../../lib/helpers/getDataWithoutId'
import { data } from '@/shared/const/data'

export default function Thead() {
  return (
    <thead>
      <tr>
        {getDataWithoutId(data[0], 'keys').map((filter, idx) => {
          if (filter === 'isChecked') {
            return (
              <th align="left" className={styles.th} key={idx}>
                <Checkbox type="radio" />
              </th>
            )
          } else {
            return (
              <th align="left" className={styles.th} key={idx}>
                <TableFilter label={filter} sortDirection="down" />
              </th>
            )
          }
        })}
      </tr>
    </thead>
  )
}
