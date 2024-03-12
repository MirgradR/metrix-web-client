import { NavLink } from 'react-router-dom'

import Icon from '@/shared/ui/Icon/Icon'

import { NavItemProps } from './navItem.model'

import styles from './styles.module.css'

const NavItem = ({ link, icon, isActive, label, notification }: NavItemProps) => {
  return (
    <li>
      <NavLink to={link} className={isActive ? `${styles.active} ${styles.link}` : styles.link}>
        <Icon icon={icon} color="#53545C" />
        <span className="show">{label}</span>
        {notification && <span className={styles.notification}>{notification}</span>}
      </NavLink>
    </li>
  )
}

export default NavItem
