import { BrowserRouter } from 'react-router-dom'
import { RoutesApp } from 'settings/routes'
import { ThemeProvider } from 'settings/theme'
import '../../settings/theme/css/base.css'

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <RoutesApp />
      </ThemeProvider>
    </BrowserRouter>
  )
}
