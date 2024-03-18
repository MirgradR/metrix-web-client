import { SummaryCard } from '@/shared/ui/SummaryCard/summaryCard.model'

export interface AllOrdersProps extends SummaryCard {
  allOrders: number
  diffAllOrders?: string
  pending: number
  diffPending?: string
  completed: number
  diffCompleted?: string
}
