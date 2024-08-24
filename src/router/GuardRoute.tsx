import { PropsWithChildren, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { RouteConfig } from 'router'

const useIsAuthenticated = () => {
  const token = localStorage.getItem('token')
  return token !== null
}

export function useAuthCheck(authenticated: boolean, redirectPath: string) {
  const navigate = useNavigate()
  const [isChecking, setIsChecking] = useState(true)
  const isAuthenticated = useIsAuthenticated()

  useEffect(() => {
    const checkAuth = async () => {
      // todo async check auth
      if (!authenticated || !isAuthenticated) {
        navigate(redirectPath)
      }
      setIsChecking(false)
    }

    checkAuth()
  }, [authenticated, redirectPath, navigate, isAuthenticated])

  return isChecking
}

const GuardRoute = ({
  route,
  children
}: PropsWithChildren<{ route: RouteConfig }>) => {
  const isChecking = useAuthCheck(route.auth || false, '/login')

  if (isChecking) {
    return null // or loading spinner
  }

  return children
}

export default GuardRoute
