export interface DropdownProps {
  data: string[]
  isOpen: boolean
  selectedItem: string
  setIsOpen: (isOpen: boolean) => void
  selectItem: (item: string) => void
}
