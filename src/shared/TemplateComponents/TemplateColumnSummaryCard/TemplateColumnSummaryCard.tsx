import Text from '@/shared/ui/Text/Text'
import styles from './TemplateColumnSummaryCard.module.css'
import React from 'react'

interface TemplateColumnSummaryCardProps {
  title: string
  value: number
  difference: string
}

const TemplateColumnSummaryCard = ({ title, value, difference }: TemplateColumnSummaryCardProps) => {
  const differenceNum = parseFloat(difference)
  const differenceClass = differenceNum > 0 ? 'differencePositive' : 'differenceNegative'
  return (
    <div className={styles.column}>
      <div className={styles.title}>
        <Text type="paragraph2" weight="regular">
          {title}
        </Text>
      </div>

      <div className={styles.valueBlock}>
        <div className={styles.value}>
          <Text type="subHeading3" weight="medium">
            {value}
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
export default TemplateColumnSummaryCard
