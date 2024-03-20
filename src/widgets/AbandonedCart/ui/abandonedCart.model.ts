import { SummaryCard } from '@/shared/ui/SummaryCard/summaryCard.model'

export interface AbandonedCartProps extends SummaryCard {
  abandonedCart: number
  diffAbandonedCart: string
  customers: number
  diffCustomers: string
}
