import React from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Layout from 'layout'
import Home from 'pages/Home'
import GuardRoute from './GuardRoute'

export type RouteConfig = RouteObject & {
  auth?: boolean
  children?: RouteConfig[]
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: '/*',
    element: <NotFound />
  }
]

function NotFound() {
  return <h1>Not Found</h1>
}

const wrapWithGuard = (route: RouteConfig): RouteConfig => {
  if (route.auth) {
    return {
      ...route,
      element: <GuardRoute route={route}>{route.element}</GuardRoute>
    }
  }

  if (route.children) {
    return {
      ...route,
      children: route.children.map(wrapWithGuard)
    }
  }

  return route
}

const guardedRoutes = routes.map(wrapWithGuard)

export default createBrowserRouter(guardedRoutes)
