import { Link } from 'react-router-dom'

import Input from '@/shared/ui/Input/Input'
import Icon from '@/shared/ui/Icon/Icon'
import Button from '@/shared/ui/Button/Button'

import styles from './styles.module.css'

const RegistrationForm = () => {
  return (
    <form className={styles.form}>
      <Input type="text" placeholder="Your Full Name" leftIcon={<Icon icon="user" size="20" color="#6e7079" />} />
      <Input type="text" placeholder="Email Address" leftIcon={<Icon icon="mail" size="20" color="#6e7079" />} />
      <Input
        type="password"
        placeholder="Create a Strong Password"
        leftIcon={<Icon icon="lock" size="20" color="#6e7079" />}
        rightIcon={<Icon icon="eye_off" size="20" />}
      />
      <p className={styles.login}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <Button label="Login" />
    </form>
  )
}

export default RegistrationForm
