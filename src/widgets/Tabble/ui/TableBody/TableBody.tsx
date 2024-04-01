import React from 'react'
import styles from './styles.module.css'
import Thead from '../Thead/Thead'
import Tbody from '../Tbody/Tbody'

const TableBody = () => {
  return (
    <table className={styles.table}>
      <Thead />
      <Tbody />
    </table>
  )
}

export default TableBody
