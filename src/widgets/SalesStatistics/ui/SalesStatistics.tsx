import classNames from '@/shared/lib/utils/classNames'
import SummaryCardValues from '@/shared/ui/SummaryCardValues'
import { SalesStatisticProps } from './salesStatistics.model'
import React from 'react'
import Block from '@/shared/ui/Block/Block'
import Icon from '@/shared/ui/Icon/Icon'
import Text from '@/shared/ui/Text/Text'
import styles from '@/shared/ui/SummaryCard/styles.module.css'

const SalesStatistics = ({ period, sales, diffSales, volume, diffVolume }: SalesStatisticProps) => {
  return (
    <Block className={styles.blockHover}>
      <div className={styles.summaryCardHeader}>
        <div className={classNames(styles.iconBlock, styles['iconBlock--blueBackground'])}>
          <Icon icon="graph_light" size="20" />
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
        <SummaryCardValues title="Sales" value={sales} difference={diffSales} />
        <SummaryCardValues title="Volume" value={volume} difference={diffVolume} />
      </div>
    </Block>
  )
}

export default SalesStatistics
