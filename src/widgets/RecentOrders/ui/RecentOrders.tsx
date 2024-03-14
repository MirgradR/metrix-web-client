import Block from '@/shared/ui/Block/Block'
import Icon from '@/shared/ui/Icon/Icon'
import Button from '@/shared/ui/Button/Button'
import Text from '@/shared/ui/Text/Text'

import styles from './styles.module.css'

const RecentOrders = () => {
  return (
    <Block>
      <Text type="paragraph2" tagName="h2" weight="medium" className={styles.title}>
        Recent Orders
      </Text>
      <div className={styles.iconWrapper}>
        <Icon icon="bag" size="60" color="#BEC0CA" />
      </div>
      <div className={styles.info}>
        <Text type="subHeading3" tagName="h3" weight="medium" className={styles.infoTitle}>
          No Orders Yet?
        </Text>
        <Text type="paragraph2" className={styles.description}>
          Add products to your store and start selling to see orders here.
        </Text>
        <Button label="New Product" iconLeft={<Icon icon="plus" />} className={styles.btn} />
      </div>
    </Block>
  )
}

export default RecentOrders
