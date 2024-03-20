import { type ReactElement } from 'react'

import { AuthHeader } from '@/widgets/AuthHeader'

import styles from '../styles/authLayout.module.css'

interface AuthLayoutProps {
  children: ReactElement
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <AuthHeader />
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default AuthLayout
