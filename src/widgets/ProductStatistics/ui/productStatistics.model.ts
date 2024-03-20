import { SummaryCard } from '@/shared/ui/SummaryCard/summaryCard.model'

export interface ProductStatisticsProps extends SummaryCard {
  allProducts: number
  diffAllProducts: string
  active: number
  diffActive: string
}
