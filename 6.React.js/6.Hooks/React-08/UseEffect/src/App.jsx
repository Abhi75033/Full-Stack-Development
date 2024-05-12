import { useState } from 'react'
import UseCase1 from './Components/UseCase1'
import UseCase2 from './Components/UseCase2'
import Timer from './Components/UseCase3'
import Clock from './Components/RealTimeClock'

function App() {
  const [flag, setFlag] = useState(false)

  return (
    <>
    {/* <div className='container text-center'>
      <h1>{count}</h1>
      <button className='btn btn-success' onClick={()=>setCount(count+1)}>+</button>
      <button className='btn btn-danger ms-2' onClick={()=>setCount(count-1)}>-</button>
    </div> */}
    {/* {flag?<UseCase1/>:''}
    <button onClick={()=>flag?setFlag(false):setFlag(true)}>{flag?'Hide':'Show'}</button> */}
    {/* <UseCase2/> */}
    <Timer/>
    <Clock/>
    </>
  )
}

export default App
