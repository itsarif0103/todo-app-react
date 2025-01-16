import React, { useContext } from 'react'
import { AppContext } from './AppContext'

const Footer = () => {
    const {phone2, name2} = useContext(AppContext)
  return (
    <div>
      <h1>Footer</h1>
      <h2>Name: {name2}</h2>
      <h3>Phone: {phone2} </h3>
    </div>
  )
}

export default Footer
