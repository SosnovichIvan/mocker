import { useEffect } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import { userState } from 'settings/state/user'
import { ROUTE_REGISTER_PATH } from 'supporting/constants'

import { authPaths } from '../constant'

export const useRedirect = () => {
  const { pathname } = useLocation()

  const navigate = useNavigate()

  const isAuth = userState.getState().isAuth

  useEffect(() => {
    const isAuthPath = authPaths.some(x => x === pathname)

    if (!isAuthPath && !isAuth) {
      navigate(ROUTE_REGISTER_PATH)
    }
  }, [pathname, isAuth])
}
