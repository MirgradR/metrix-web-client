import { NavLink } from 'react-router-dom'
import Icon from '@/shared/ui/Icon/Icon'

import styles from './styles.module.css'

const SupportLink = () => {
  return (
    <li>
      <NavLink to="/support" className={styles.support}>
        <Icon icon="headphones" color="#000000" />
        <span className="show">Contact Support</span>
      </NavLink>
    </li>
  )
}

export default SupportLink
