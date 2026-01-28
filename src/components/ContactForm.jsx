import axios from 'axios'
import React, { useState } from 'react'

const sendEmail = async (email) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, email, { withCredentials: true });
    return response.message
}

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await sendEmail(formData)
            setFormData({
                name: "",
                subject: "",
                email: "",
                message: ""
            });
        } catch (error) {
            console.log(error)
        }

    }
  return (
      <form onSubmit={handleSubmit} className='max-w-xl mx-auto mb-8'>
          <div className='mb-5'>
              <label htmlFor="name" className='block mb-2.5 text-sm font-medium'>Full Name</label>
              <input type="text" name='name' value={formData.name} onChange={handleChange} id='name' placeholder='John Doe' className='bg-secondary border border-primary text-sm rounded-lg block w-full px-3 py-2.5 shadow-xs placeholder:text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-amber-300' required/>
          </div>
          <div className='mb-5'>
              <label htmlFor="email" className='block mb-2.5 text-sm font-medium'>Email</label>
              <input type="email" name='email' id='email' value={formData.email} onChange={handleChange} placeholder='johndoe@gmail.com' className='bg-secondary border border-primary text-sm rounded-lg block w-full px-3 py-2.5 shadow-xs placeholder:text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-amber-300' required/>
          </div>
          <div className='mb-5'>
              <label htmlFor="subject" className='block mb-2.5 text-sm font-medium'>Subject</label>
              <input type="text" name='subject' value={formData.subject} onChange={handleChange} id='subject' placeholder='lets talk...' className='bg-secondary border border-primary text-sm rounded-lg block w-full px-3 py-2.5 shadow-xs placeholder:text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-amber-300' required/>
          </div>
          <div className='mb-5'>
              <label htmlFor="message" className='block mb-2.5 text-sm font-medium'>Message</label>
              <textarea name='message' id='message' value={formData.message} onChange={handleChange} rows={4} placeholder='message' className='bg-secondary border border-primary text-sm rounded-lg block w-full px-3 py-2.5 shadow-xs placeholder:text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-amber-300' required/>
          </div>

          <button type='submit' className='bg-accent px-12 py-3 rounded-lg text-white font-medium hover:shadow-lg hover:bg-amber-400 transition-all duration-300 hover:-translate-y-1 cursor-pointer'>Submit</button>
    </form>
  )
}

export default ContactForm