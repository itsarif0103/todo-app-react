import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form>
        <input type="text"  placeholder='Name'/>
    <br />
    <input type="email" placeholder='Email' />
    <br />
    <textarea name="message" placeholder='Enter Message'></textarea>
    <button>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
