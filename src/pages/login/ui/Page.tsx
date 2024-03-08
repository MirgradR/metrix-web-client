import { LoginForm } from '@/features/authentication/login'
import Logo from '@/shared/ui/Logo/logo'

import styles from './styles.module.css'

const LoginPage = () => {
  return (
    <>
      <div className={styles.info}>
        <Logo icon="logo" withText={false} />
        <strong className={styles.subtitle}>Welcome back!</strong>
        <h1 className={styles.title}>Login to your account</h1>
      </div>
      <LoginForm />
    </>
  )
}

export default LoginPage
