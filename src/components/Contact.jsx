import React, { useContext } from 'react'
import { AppContext } from './AppContext'

const Contact = () => {
    const {phone, name} = useContext(AppContext)
  return (
    <div>
      <h1>Contact</h1>
      <h2>Name: {name}</h2>
      <h3>Phone: {phone}</h3>
    </div>
  )
}

export default Contact
