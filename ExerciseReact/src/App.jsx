import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyComponents from './components/MyComponents'
import './exercise-3-function/App.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MyComponents></MyComponents>
    </>
  )
}

export default App
