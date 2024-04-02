import SummaryCardValues from '@/shared/ui/SummaryCardValues'
import { CustomerStatisticsProps } from './customerStatistics.model'
import React from 'react'
import Block from '@/shared/ui/Block/Block'
import Icon from '@/shared/ui/Icon/Icon'
import Text from '@/shared/ui/Text/Text'
import styles from './styles.module.css'

const CustomerStatistics = ({ period, data }: CustomerStatisticsProps) => {
  return (
    <Block className={styles.blockHover}>
      <div className={styles.summaryCardHeader}>
        <div className={styles.iconBlock}>
          <Icon icon="twoUser_light" size="20" />
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
        {data.map((item, index) => (
          <SummaryCardValues key={index} title={item.title} value={item?.value} difference={item?.difference} />
        ))}
      </div>
    </Block>
  )
}

export default CustomerStatistics
