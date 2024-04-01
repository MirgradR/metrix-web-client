import { Customer } from '../../ui/TableBody/tableBody.model'

export const getDataWithoutId = (sliceElem: Customer, result: 'keys' | 'values') => {
  const copySlice = { ...sliceElem }
  delete copySlice.id
  return result === 'keys' ? Object.keys(copySlice) : Object.values(copySlice)
}
