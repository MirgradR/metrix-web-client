import { SummaryCard } from '@/shared/ui/SummaryCard/summaryCard.model'

export interface SalesStatisticProps extends SummaryCard {
  sales: number
  diffSales: string
  volume: number
  diffVolume: string
}
