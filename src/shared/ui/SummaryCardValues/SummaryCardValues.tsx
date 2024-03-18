import Text from '@/shared/ui/Text/Text'
import styles from './summaryCardValues.module.css'
import React from 'react'
import classNames from '@/shared/lib/utils/classNames'

interface SummaryCardValuesProps {
  title: string
  titleAttention?: boolean
  value: number
  valueCharacter?: string
  difference?: string
}

const SummaryCardValues = ({ title, titleAttention, value, valueCharacter, difference }: SummaryCardValuesProps) => {
  const differenceNum = parseFloat(difference)
  const differenceClass = differenceNum > 0 ? 'differencePositive' : 'differenceNegative'
  return (
    <div className={styles.column}>
      <div
        className={
          titleAttention
            ? classNames(styles.title, { [`${styles['title--red']}`]: true })
            : classNames(styles.title, { [`${styles['title--red']}`]: false })
        }
      >
        <Text type="paragraph2" weight="regular">
          {title}
        </Text>
      </div>

      <div className={styles.valueBlock}>
        <div className={styles.value}>
          <Text type="subHeading3" weight="medium">
            {value}
            {valueCharacter}
          </Text>
        </div>
        <div className={`${styles[differenceClass]}`}>
          <Text type="label1" weight="regular">
            {difference}
          </Text>
        </div>
      </div>
    </div>
  )
}
export default SummaryCardValues
