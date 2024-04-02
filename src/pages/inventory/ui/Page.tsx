import Text from '@/shared/ui/Text/Text'
import styles from './styles.module.css'
import Icon from '@/shared/ui/Icon/Icon'
import Button from '@/shared/ui/Button/Button'
import { AllOrders } from '@/widgets/AllOrders'
import { CustomerStatistics } from '@/widgets/CustomerStatistics'

const InventoryPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Text type="paragraph1" tagName="h2">
          Inventory Summary
        </Text>
        <Button label="Add a New Order" iconLeft={<Icon icon="plus" />} size={200} className={styles.btn} />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.widgets}>
          <AllOrders
            period="This Week"
            data={[
              { title: 'All Products', value: 350 },
              { title: 'Active', value: 316, difference: '86%' }
            ]}
          />
          <CustomerStatistics
            period="This week"
            data={[
              { title: 'Low Stock Alert', value: 23 },
              { title: 'Expired', value: 3 },
              { title: '1 Start Rating', value: 2 }
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default InventoryPage
