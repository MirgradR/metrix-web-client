import { RegistrationForm } from '@/features/authentication/registration'
import Logo from '@/shared/ui/Logo/logo'

import styles from './styles.module.css'

const RegistrationPage = () => {
  return (
    <>
      <div className={styles.info}>
        <Logo icon="logo" withText={false} />
        <strong className={styles.subtitle}>
          Get Started with <span>Metrix</span>
        </strong>
        <h1 className={styles.title}>Create your free account</h1>
      </div>
      <RegistrationForm />
    </>
  )
}

export default RegistrationPage
