import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Inicio } from './components/Inicio'
import { Tierra } from './components/tierra'
import { Agua } from './components/Agua'
import { Aire } from './components/Aire'
import { Fuego } from './components/Fuego'
import { AppRoutes } from './routes/AppRoutes'
import DrawerAppBar from './components/DrawerAppBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DrawerAppBar />
      <AppRoutes />
    </>
  )
}

export default App
