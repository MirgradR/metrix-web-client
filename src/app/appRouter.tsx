import { createBrowserRouter } from 'react-router-dom'

import BaseLayout from './layouts/BaseLayout'
import AuthLayout from './layouts/AuthLayout'

import { MainPage } from '@/pages/main'
import { LoginPage } from '@/pages/login'
import { RegistrationPage } from '@/pages/registration'

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [{ path: '/', element: <MainPage /> }]
  },
  {
    path: '/login',
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    )
  },
  {
    path: '/registration',
    element: (
      <AuthLayout>
        <RegistrationPage />
      </AuthLayout>
    )
  }
])
