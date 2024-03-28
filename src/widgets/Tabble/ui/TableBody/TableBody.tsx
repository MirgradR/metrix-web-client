import React from 'react'
import styles from './styles.module.css'
import { ICustomers } from './tableBody.module'
import TableFilter from '@/shared/ui/TableFilter/TableFilter'
import Checkbox from '@/shared/ui/Checkbox/Checkbox'

const TableBody = () => {
  // TO-DO временные данные пока не подключен бэкенд
  const data: Array<ICustomers> = [
    {
      id: 1,
      isChecked: false,
      'Customer Name': 'Janet Adebayo',
      Email: 'janet.a@mail.com',
      Phone: '+2348065650633',
      Orders: '10',
      'Order Total': '₦25,000.00',
      'Customer Since': '12 Aug 2022 - 12:25 am',
      Status: 'Completed'
    },
    {
      id: 2,
      isChecked: false,
      'Customer Name': 'Janet Adebayo',
      Email: 'janet.a@mail.com',
      Phone: '+2348065650633',
      Orders: '10',
      'Order Total': '₦25,000.00',
      'Customer Since': '12 Aug 2022 - 12:25 am',
      Status: 'Completed'
    },
    {
      id: 3,
      isChecked: false,
      'Customer Name': 'Janet Adebayo',
      Email: 'janet.a@mail.com',
      Phone: '+2348065650633',
      Orders: '10',
      'Order Total': '₦25,000.00',
      'Customer Since': '12 Aug 2022 - 12:25 am',
      Status: 'Completed'
    },
    {
      id: 4,
      isChecked: false,
      'Customer Name': 'Janet Adebayo',
      Email: 'janet.a@mail.com',
      Phone: '+2348065650633',
      Orders: '10',
      'Order Total': '₦25,000.00',
      'Customer Since': '12 Aug 2022 - 12:25 am',
      Status: 'Completed'
    },
    {
      id: 5,
      isChecked: false,
      'Customer Name': 'Janet Adebayo',
      Email: 'janet.a@mail.com',
      Phone: '+2348065650633',
      Orders: '10',
      'Order Total': '₦25,000.00',
      'Customer Since': '12 Aug 2022 - 12:25 am',
      Status: 'Completed'
    }
  ]

  const getSliceOfData = (sliceElem: ICustomers, result: 'keys' | 'values') => {
    const copySlice = { ...sliceElem }
    delete copySlice.id
    return result === 'keys' ? Object.keys(copySlice) : Object.values(copySlice)
  }

  return (
    <div>
      <div className={styles.tFilters}>
        {getSliceOfData(data[0], 'keys').map((filter, idx) => {
          if (filter === 'isChecked') {
            return <Checkbox type="checkbox" key={idx} />
          } else {
            return <TableFilter label={filter} sortDirection="down" key={idx} />
          }
        })}
      </div>
      <div className={styles.tBody}>
        {data.map((row) => {
          return (
            <div className={styles.tRow} key={row.id}>
              {getSliceOfData(row, 'values').map((rowItem, idx) => {
                if (idx === 0) {
                  return <Checkbox type="radio" key={idx} />
                } else {
                  return <span key={idx}>{rowItem}</span>
                }
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TableBody
