import { BrowserRouter } from 'react-router-dom'
import { RoutesApp } from 'settings/routes'
import { ThemeProvider } from 'settings/theme'

import '../../settings/theme/css/base.css'
import '../../settings/theme/css/normalize.css'

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <RoutesApp />
      </ThemeProvider>
    </BrowserRouter>
  )
}
