interface InventoryDataProps {
  value: number
  title?: string
  difference?: string
}

export interface CustomerStatisticsProps {
  period: string
  data: InventoryDataProps[]
}
