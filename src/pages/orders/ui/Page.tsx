import { AbandonedCart } from '@/widgets/AbandonedCart'
import { AllOrders } from '@/widgets/AllOrders'
import { RecentOrders } from '@/widgets/RecentOrders'
import Button from '@/shared/ui/Button/Button'
import Icon from '@/shared/ui/Icon/Icon'
import Text from '@/shared/ui/Text/Text'

import styles from './styles.module.css'

const OrdersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Text type="paragraph1" tagName="h2">
          Orders Summary
        </Text>
        <Button label="Create a New Order" iconLeft={<Icon icon="plus" />} size={200} className={styles.btn} />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.widgets}>
          <AllOrders
            period="This Week"
            data={[
              { title: 'All Orders', value: 0 },
              { title: 'Pending', value: 0 },
              { title: 'Completed', value: 0 }
            ]}
          />
          <AllOrders
            period="This Week"
            data={[
              { title: 'Canceled', value: 0 },
              { title: 'Returned', value: 0 },
              { title: 'Damaged', value: 0 }
            ]}
          />
          <AbandonedCart abandonedCart={0} customers={0} />
        </div>
        <RecentOrders className={styles.centered} />
      </div>
    </div>
  )
}

export default OrdersPage
