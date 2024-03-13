import SupportLink from '../SupportLink/SupportLink'
import GiftLink from '../GiftLink/GiftLink'

import styles from './styles.module.css'

const NavAdditionList = () => {
  return (
    <ul className={styles.menu}>
      <SupportLink />
      <GiftLink />
    </ul>
  )
}

export default NavAdditionList
