import Dropdown from '@/shared/ui/Dropdown/Dropdown'
import { useState } from 'react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const data = ['Nanny’s Shop', 'Colors Shop', 'Flowers Shop']
  return <Dropdown data={data} isOpen={isOpen} setIsOpen={setIsOpen} selectedItem="Nanny’s Shop" />
}

export default Nav
