import NavItem from '../NavItem/NavItem'

import styles from './styles.module.css'

const NavMainList = () => {
  return (
    <ul className={styles.menu}>
      <NavItem label="Dashboard" link="/dashboard" icon="category" isActive />
      <NavItem label="Orders" link="/orders" icon="bag" notification={3} />
      <NavItem label="Customers" link="/customers" icon="two_users" />
      <NavItem label="Inventory" link="/inventory" icon="folder" />
      <NavItem label="Conversations" link="/chat" icon="chat" notification={16} />
      <NavItem label="Settings" link="/settings" icon="settings" />
    </ul>
  )
}

export default NavMainList
