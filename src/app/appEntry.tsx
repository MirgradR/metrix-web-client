import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { appRouter } from './appRouter'
import { store } from './appStore'

import '@/shared/styles/theme.css'
import '@/shared/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
)
