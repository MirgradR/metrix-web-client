import React from 'react'
import TableHeader from './TableHeader/TableHeader'
import TableBody from './TableBody/TableBody'
import TableFooter from './TableFooter/TableFooter'
import styles from './styles.module.css'

const Table = () => {
  return (
    <div className={styles.table}>
      <TableHeader />
      <TableBody />
      <TableFooter />
    </div>
  )
}

export default Table
