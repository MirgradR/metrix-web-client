import React from 'react'
import { DropdownForm } from '@/features/product/dropdownForm'
import Icon from '@/shared/ui/Icon/Icon'
import styles from './styles.module.css'

const TableFooter = () => {
  return (
    <div className={styles.tfooter}>
      <div className={styles.pageControl}>
        <DropdownForm data={['10', '20', '30', '50', '100']} />
        <span>Items per page</span>
        <span>1-10 of 200 items</span>
      </div>

      <div className={styles.pagination}>
        <DropdownForm data={['1', '2', '3', '4', '5']} />
        <span>of 44 pages</span>
        <div className={styles.buttonsContainer}>
          <button>
            <Icon size="16" icon="chevron_right" />
          </button>
          <button>
            <Icon size="16" icon="chevron_right" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TableFooter
