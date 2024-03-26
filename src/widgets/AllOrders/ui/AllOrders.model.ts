import { SummaryCard } from '@/shared/ui/SummaryCard/summaryCard.model'

interface OrdersDataProps {
  value: number
  title?: string
  difference?: string
}

export interface AllOrdersProps extends SummaryCard {
  data: OrdersDataProps[]
}
