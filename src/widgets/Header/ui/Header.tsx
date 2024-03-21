import Text from '@/shared/ui/Text/Text'
import Avatar from '@/shared/ui/Avatar/Avatar'
import Nav from './nav/Nav'
import Notification from './notification/Notification'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Text type="subHeading3" weight="medium">
        Dashboard
      </Text>
      <div className={styles.header__bar}>
        <Nav />
        <Notification />
        <Avatar size="small" />
      </div>
    </header>
  )
}

export default Header
