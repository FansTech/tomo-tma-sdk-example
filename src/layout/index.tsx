import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <main className="h-screen w-full">
      <Outlet />
    </main>
  )
}
