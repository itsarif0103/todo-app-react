import React, { useState, useCallback } from 'react'
import CallBackComp from './CallBackComp'

const useCallBacks = () => {
    const [count, setCount] = useState(0)

    const fn = useCallback(() =>{}, [])
  return (
    <div>
        <h1><CallBackComp fn={fn} /></h1>
      <h1>Count: {count}</h1>
      <button onClick={() =>setCount((prev) => prev+1)}>Click Here</button>
    </div>
  )
}

export default useCallBacks
