import SummaryCardValues from '@/shared/ui/SummaryCardValues'
import React from 'react'
import Block from '@/shared/ui/Block/Block'
import Icon from '@/shared/ui/Icon/Icon'
import Text from '@/shared/ui/Text/Text'
import styles from '@/shared/ui/SummaryCard/styles.module.css'
import { AllOrdersProps } from './AllOrders.model'

const AllOrders = ({
  period,
  allOrders,
  diffAllOrders,
  pending,
  diffPending,
  completed,
  diffCompleted
}: AllOrdersProps) => {
  return (
    <Block className={styles.blockHover}>
      <div className={styles.summaryCardHeader}>
        <div className={styles.iconBlock}>
          <Icon icon="bag" size="20" />
        </div>
        <Text type="label1" weight="regular">
          {period && (
            <div className={styles.period}>
              <Text type="label1" weight="regular" className={styles.text}>
                {period}
              </Text>
              <Icon icon="chevronDown" size="16" />
            </div>
          )}
        </Text>
      </div>
      <div className={styles.summaryColumns}>
        <SummaryCardValues title="All Orders" value={allOrders} difference={diffAllOrders} />
        <SummaryCardValues title="pending" value={pending} difference={diffPending} />
        <SummaryCardValues title="Completed" value={completed} difference={diffCompleted} />
      </div>
    </Block>
  )
}

export default AllOrders
