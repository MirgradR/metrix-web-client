export interface IMarkettingData {
  id: number
  title: string
  value: number
}

export interface MarkettingProps {
  title: string
  period: string
  data: IMarkettingData[]
}
