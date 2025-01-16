import React from 'react'
import Routing from '../components/ReactRouter'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <Routing />
      <div className="container"><Outlet /></div>

    </div>
  )
}

export default RootLayout
