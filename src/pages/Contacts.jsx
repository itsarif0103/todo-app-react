import React from 'react'
import { useNavigate } from 'react-router-dom'
// import ContactForm from '../components/ContactForm';

const Contact = () => {

  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact us</h1>
      <div className="container-layout">
      <button onClick={()=>{navigate('form')}}>Contact Form</button>
      <button onClick={()=>{navigate('info')}}>Contact Info</button>
      </div>

    </div>
  )
}

export default Contact
