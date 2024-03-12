import { RegistrationForm } from '@/features/authentication/registration'
import Logo from '@/shared/ui/Logo/Logo'

import styles from './styles.module.css'

const RegistrationPage = () => {
  return (
    <>
      <div className={styles.info}>
        <Logo size="60" />
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
