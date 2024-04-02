import React from 'react'
import Checkbox from '@/shared/ui/Checkbox/Checkbox'
import { getDataWithoutId } from '../../lib/helpers/getDataWithoutId'
import styles from './styles.module.css'
import { data } from '@/shared/const/data'

export default function Tbody() {
  return (
    <tbody className={styles.tbody}>
      {data.map((row) => {
        return (
          <tr key={row.id}>
            {getDataWithoutId(row, 'values').map((rowItem, idx) => {
              if (idx === 0) {
                return (
                  <td key={idx} align="left">
                    <Checkbox type="radio" />
                  </td>
                )
              } else {
                return (
                  <td key={idx} align="left">
                    <span>{rowItem}</span>
                  </td>
                )
              }
            })}
          </tr>
        )
      })}
    </tbody>
  )
}
