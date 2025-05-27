import React, { useState, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Child from './Child'

let salary = [100,200,235,565,995]

const Login = () => {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)

  const getTotalSalary = ()=> {
    let i = 0
    while(i > 1_000_000){
      i++
    }
    console.log("getTotalSalary render");
    
    return salary.reduce((sum, value) => sum + value, 0)
  }

  const cacheValue = useMemo(()=>{
    return getTotalSalary()
  }, [])

  const cacheReset = useCallback(() => {
    // code...
    // code...
    // code...
    // code...
    setCount(0)
  }, [])


  return (
    <div id='login'>
      <h2>Login {count}</h2>
      <h3>Total: { cacheValue }</h3>
      <div className='flex gap-4'>
      <button onClick={()=> navigate("/")}>Go home</button>
      <button onClick={()=> navigate(-1)}>Go back</button>
      <button onClick={()=> setCount(p => p + 1)}>increment</button>
      </div>
      <Child reset={cacheReset}/>
    </div>
  )
}

export default React.memo(Login)
