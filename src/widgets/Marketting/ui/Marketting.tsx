import Block from '@/shared/ui/Block/Block'
import Text from '@/shared/ui/Text/Text'
import Icon from '@/shared/ui/Icon/Icon'

import DoughnutChart from './DoughnutChart/DoughnutChart'
import { MarkettingProps } from './marketting.model'

import styles from './styles.module.css'

const Marketting = ({ title, period, data }: MarkettingProps) => {
  return (
    <Block type="big" className={styles.container}>
      <div className={styles.header}>
        <Text type="paragraph1" tagName="h2" className={styles.title}>
          {title}
        </Text>

        {period && (
          <div className={styles.period}>
            <Text type="label1" weight="regular">
              {period}
            </Text>
            <Icon icon="chevronDown" size="16" />
          </div>
        )}
      </div>

      <DoughnutChart data={data} />
    </Block>
  )
}

export default Marketting
