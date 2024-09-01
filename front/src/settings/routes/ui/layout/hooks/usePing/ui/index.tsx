import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { appState } from 'settings/state'
import { api } from 'supporting/api'
import {
  PING_TIMER,
  ROUTE_MAIN_PATH,
  ROUTE_REGISTER_PATH,
} from 'supporting/constants'

export const usePing = () => {
  const navigate = useNavigate()

  const isAuth = appState.userState(state => state.getIsAuth())

  useEffect(() => {
    const interval = setInterval(() => {
      api
        .pingResponse()
        .then(() => navigate(ROUTE_MAIN_PATH))
        .catch(() => navigate(ROUTE_REGISTER_PATH))
    }, PING_TIMER)

    if (!isAuth && interval) {
      clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAuth])
}
