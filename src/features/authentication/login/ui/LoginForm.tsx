import { Link } from 'react-router-dom'

import Input from '@/shared/ui/Input/Input'
import Icon from '@/shared/ui/Icon/Icon'
import Button from '@/shared/ui/Button/Button'

import styles from './styles.module.css'

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <Input type="text" placeholder="Email Address" leftIcon={<Icon icon="mail" size="20" color="#6e7079" />} />
      <Input
        type="password"
        placeholder="Password"
        leftIcon={<Icon icon="lock" size="20" color="#6e7079" />}
        rightIcon={<Icon icon="eye_off" size="20" />}
      />
      <Link className={styles.recover} to="/recoverPassword">
        Recover Password
      </Link>
      <p className={styles.signUp}>
        Don’t have an account? <Link to="/registration">Sign Up</Link>
      </p>
      <Button label="Login" />
    </form>
  )
}

export default LoginForm
