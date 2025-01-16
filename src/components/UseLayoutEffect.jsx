import React, { useEffect } from 'react'
import { useLayoutEffect } from 'react';

const UseLayoutEffects = () => {
    useEffect(()=>{
        console.log("MEssage from useEffect");
        
    })
    useLayoutEffect(()=>{
        console.log("MEssage from useLayoutEffect");
        
    })
  return (
    <div>
      <h1>Test Message</h1>
      {Array(40000).fill('').map((item, index) =>(
        <li key={index}>{Math.pow(Math.random(), 10)}</li>
      ))}
    </div>
  )
}

export default UseLayoutEffects
