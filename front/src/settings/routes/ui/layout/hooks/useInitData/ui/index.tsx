import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { appState } from 'settings/state'
import { api } from 'supporting/api'
import { ROUTE_REGISTER_PATH, ROUTE_MAIN_PATH } from 'supporting/constants'

export const useInitData = () => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true)

  const cleanUser = appState.userState(state => state.cleanUser)
  const setUser = appState.userState(state => state.setUser)

  useEffect(() => {
    setIsLoading(true)
    api
      .getUserResponse()
      .then(d => {
        setUser(d)
        navigate(ROUTE_MAIN_PATH)
      })
      .catch(() => {
        navigate(ROUTE_REGISTER_PATH)
        cleanUser()
      })
      .finally(() => setIsLoading(false))
  }, [])

  return { isLoading }
}
