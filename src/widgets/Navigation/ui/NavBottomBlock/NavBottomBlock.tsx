import { Link } from 'react-router-dom'

import Icon from '@/shared/ui/Icon/Icon'
import NavAdditionList from '../NavAdditionList/NavAdditionList'

import styles from './styles.module.css'

const NavBottomBlock = () => {
  return (
    <div>
      <NavAdditionList />

      <Link to="/login" className={styles.logout}>
        <Icon icon="logout" color="#CC5F5F" />
        <span className="show">Logout</span>
      </Link>
    </div>
  )
}

export default NavBottomBlock
