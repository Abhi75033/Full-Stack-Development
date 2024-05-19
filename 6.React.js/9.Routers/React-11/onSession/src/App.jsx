import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './Component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Login from './Component/Login'
import Ragister from './Component/Ragister'
import AddSales from './Component/AddSales'
import Top5sales from './Component/top5sales'
import Revenue from './Component/Revenue'

function App() {
  const [count, setCount] = useState(0)

  return (
 <BrowserRouter>
 <div>
  <Header/>
 </div>
 <Routes path='/'element={<Home/>}>
 
 <Route path='/login' element={<Login/>}/>
 <Route path='/register' element={<Ragister/>}/>
 <Route path='/addsales' element={<AddSales/>}/>
 <Route path='/top5' element={<Top5sales/>}/>
 <Route path='/revenue' element={<Revenue/>}/>
 </Routes>

 </BrowserRouter>

  )
}

export default App
