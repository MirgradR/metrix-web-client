import { LoginForm } from '@/features/authentication/login'
import Logo from '@/shared/ui/Logo/Logo'

import styles from './styles.module.css'

const LoginPage = () => {
  return (
    <>
      <div className={styles.info}>
        <Logo size="60" />
        <strong className={styles.subtitle}>Welcome back!</strong>
        <h1 className={styles.title}>Login to your account</h1>
      </div>
      <LoginForm />
    </>
  )
}

export default LoginPage
