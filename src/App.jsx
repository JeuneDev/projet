import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Composant from './component/component'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Composant></Composant>
    </>
  )
}

export default App
