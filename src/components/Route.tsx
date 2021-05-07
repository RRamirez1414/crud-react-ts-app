import React, { ReactChild, useEffect, useState } from 'react'

interface RouteProps {
  path: string
  children: ReactChild | ReactChild[]
}

const Route = ({ path, children }: RouteProps) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onRouteChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', onRouteChange)

    return () => {
      window.removeEventListener('popstate', onRouteChange)
    }
  }, [])

  return currentPath === path ? <div>{children}</div> : null
}

export default Route
