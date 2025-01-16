import React from 'react'
import Image from '../assets/mist.png'
import { NavLink, useNavigate } from 'react-router-dom'

const Routing = () => {

  const navigate = useNavigate();
  return (
    <div className='Navbar'>
      <img src={Image} alt="image" width={"70px"} />
      <ul>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/products'><li>Products</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
        <NavLink to='/jobs'><li>Jobs</li></NavLink>
      </ul>
      <button onClick={()=> navigate('/contact', {replace:true})}>Get Started</button>
    </div>
  )
}

export default Routing
