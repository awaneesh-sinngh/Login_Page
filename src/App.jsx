import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login_Auth from './Login_Auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Login_Auth/>
     </div>
    </>
  )
}

export default App
