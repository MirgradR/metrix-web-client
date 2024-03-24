import { Chart as ChartJS, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import Text from '@/shared/ui/Text/Text'
import { DoughnutChartProps } from './doughnutChart.model'
import { useDoughnutData } from '../../lib/hooks/useDoughnutData'

import styles from './styles.module.css'

ChartJS.register(ArcElement)

const DoughnutChart = ({ data }: DoughnutChartProps) => {
  const colors = ['#5570F1', '#FFCC91', '#97A5EB']
  const { coloredData, doughnutData } = useDoughnutData(data, colors)

  return (
    <>
      <ul className={styles.labels}>
        {coloredData.map((item) => (
          <li key={item.id} className={styles.label}>
            <div className={styles.dot} style={{ backgroundColor: item.color }}></div>
            <Text type="label2">{item.title}</Text>
          </li>
        ))}
      </ul>
      <div className={styles.wrapper}>
        <Doughnut
          width={172}
          height={172}
          data={doughnutData}
          options={{
            responsive: false,
            cutout: 60
          }}
          className={styles.doughnut}
        />
      </div>
    </>
  )
}

export default DoughnutChart
