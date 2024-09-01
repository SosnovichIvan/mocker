import { Route, Routes, Navigate } from 'react-router-dom'
import {
  ROUTE_AUTH_PATH,
  ROUTE_MAIN_PATH,
  ROUTE_REGISTER_PATH,
  ROUTE_BASE_PATH,
} from 'supporting/constants'

import { AuthPage } from 'pages/auth'
import { MainPage } from 'pages/main'
import { RegisterPage } from 'pages/register'

import { Layout } from './layout'

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path={ROUTE_BASE_PATH} element={<Layout />}>
        <Route path={ROUTE_AUTH_PATH} element={<AuthPage />} />
        <Route path={ROUTE_REGISTER_PATH} element={<RegisterPage />} />
        <Route path={ROUTE_MAIN_PATH} element={<MainPage />} />
      </Route>

      <Route path="/*" element={<Navigate to={ROUTE_MAIN_PATH} replace />} />
    </Routes>
  )
}
