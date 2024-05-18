import { useState } from 'react'
import Register from './assets/Componets/Register'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Register/>
    <ToastContainer/>
    </>
  )
}

export default App
