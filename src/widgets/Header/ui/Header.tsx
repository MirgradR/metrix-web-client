import Text from '@/shared/ui/Text/Text'
import Avatar from '@/shared/ui/Avatar/Avatar'
import Notification from './notification/Notification'
import styles from './styles.module.css'
import { HeaderProps } from './header.model'
import { DropdownForm } from '@/features/product/dropdownForm'

const Header = ({ pageName = 'Page name' }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Text type="subHeading3" weight="medium">
        {pageName}
      </Text>
      <div className={styles.header__bar}>
        <DropdownForm />
        <Notification />
        <Avatar size="small" />
      </div>
    </header>
  )
}

export default Header
