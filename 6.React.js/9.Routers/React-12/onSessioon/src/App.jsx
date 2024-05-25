import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Dasboard from './assets/components/Dashboard'


function App() {


  return (
   <BrowserRouter>
   <div>
    <Dasboard/>
   </div>
   <Routes path='/dashboard' element={<Dasboard/>}>

   </Routes>
   </BrowserRouter>
  )
}

export default App
