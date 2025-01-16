import React, { useEffect, useState } from 'react'
import useMyHook from './useMyHook'

const dummyMyHook = () => {
   const[name, setName] =  useMyHook('', 'username')
   const[id, setId] =  useMyHook('', 'idNo')
  return (
    <div>
      <h1>your Details</h1>
      <input type="text" placeholder='Enter your name' value={name} onChange={(e) =>{setName(e.target.value)}} />
      <input type="number" placeholder='Enter your id' value={id} onChange={(e) =>{setId(e.target.value)}} />
      <h2>Your name is {name} !</h2>
      <h2>Your Id is: {id}.</h2>
    </div>
  )
}

export default dummyMyHook
