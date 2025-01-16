import React, { useMemo, useState } from 'react'
import './ReactHooks.css'

const useMemoHook = () => {
    const[count, setCount] = useState(0)
    const[value, setValue] = useState(0)

    function cubeNum(num) {
        console.log('Calculation done!');
        return Math.pow(num, 3);
        
    }

    const result = useMemo(() =>cubeNum(value), [value])
  return (
    <div className='body'>
      <input type="number" onChange={(e) => setValue(e.target.value)} />
      <h1>Cube of the number is: {result} </h1>
      <button onClick={() =>{setCount(count+1)}}>Counter++</button>
      <h1>Counter:{count} </h1>
    </div>
  )
}

export default useMemoHook
