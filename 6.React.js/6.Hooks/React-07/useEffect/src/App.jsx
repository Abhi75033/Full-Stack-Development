import { useState } from 'react'
import Usecase2 from './assets/Component/Usecase2'
import Timer from './assets/Component/Timer'



function App() {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  const handler =()=>{
    flag ? setFlag(false) : setFlag(true)
  }

  return (
    <>
    {/* <{flag?<Usecase1/>:''}
    <button onClick={handler}
     className='btn btn-primary'>Toggle</button>> */}
     <Usecase2/>
     <Timer/>
    </>
  )
}

export default App
