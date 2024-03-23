import { useEffect, useState } from 'react'
import { IMarkettingData } from '../../ui/marketting.model'

export const useDoughnutData = (data: IMarkettingData[], colors: string[]) => {
  const [coloredData, setColoredData] = useState([])
  const [dataValues, setDataValues] = useState([])

  useEffect(() => {
    data.forEach((item, index) => {
      setColoredData((prev) => [...prev, { ...item, color: colors[index] }])
      setDataValues((prev) => [...prev, item.value])
    })
  }, [])

  const doughnutData = {
    datasets: [
      {
        data: dataValues,
        backgroundColor: colors,
        borderColor: colors
      }
    ]
  }

  return { coloredData, doughnutData }
}
