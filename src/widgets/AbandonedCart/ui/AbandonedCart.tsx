import SummaryCardValues from '@/shared/ui/SummaryCardValues'
import React from 'react'
import Block from '@/shared/ui/Block/Block'
import Icon from '@/shared/ui/Icon/Icon'
import Text from '@/shared/ui/Text/Text'
import styles from '@/shared/ui/SummaryCard/styles.module.css'
import { AbandonedCartProps } from '@/widgets/AbandonedCart/ui/abandonedCart.model'

const AbandonedCart = ({ period, abandonedCart, diffAbandonedCart, customers, diffCustomers }: AbandonedCartProps) => {
  return (
    <Block className={styles.blockHover}>
      <div className={styles.summaryCardHeader}>
        <div className={styles.iconBlock}>
          <Icon icon="shoppingCart" size="20" />
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
        <SummaryCardValues
          title="Abandoned Cart"
          titleAttention={true}
          value={abandonedCart}
          valueCharacter="%"
          difference={diffAbandonedCart}
        />
        <SummaryCardValues title="Customers" value={customers} difference={diffCustomers} />
      </div>
    </Block>
  )
}

export default AbandonedCart
