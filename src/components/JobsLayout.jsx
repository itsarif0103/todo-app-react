import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
      <h2>Job Openings</h2>
      <p>List of job opening in your company.</p>
      <Outlet />
    </div>
  )
}

export default JobsLayout
