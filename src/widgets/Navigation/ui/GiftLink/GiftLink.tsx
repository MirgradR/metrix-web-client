import { NavLink } from 'react-router-dom'

import Icon from '@/shared/ui/Icon/Icon'

import styles from './styles.module.css'

const GiftLink = () => {
  return (
    <li>
      <NavLink to="/gift" className={styles.gift}>
        <div>
          <Icon icon="gift" color="#000000" />
          <span className="show">Free Gift Awaits You!</span>
        </div>
        <div className="show">
          Upgrade your account <Icon icon="chevron_right" size="16" color="#6E7079" />
        </div>
      </NavLink>
    </li>
  )
}

export default GiftLink
