import React from 'react'

function ContactForm() {
  return (
      <form className='max-w-xl mx-auto mb-8'>
          <div className='mb-5'>
              <label htmlFor="name" className='block mb-2.5 text-sm font-medium'>Full Name</label>
              <input type="text" name='name' id='name' placeholder='John Doe' className='bg-secondary border border-primary text-sm rounded-lg block w-full px-3 py-2.5 shadow-xs placeholder:text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-amber-300' required/>
          </div>
          <div className='mb-5'>
              <label htmlFor="email" className='block mb-2.5 text-sm font-medium'>Email</label>
              <input type="email" name='email' id='email' placeholder='johndoe@gmail.com' className='bg-secondary border border-primary text-sm rounded-lg block w-full px-3 py-2.5 shadow-xs placeholder:text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-amber-300' required/>
          </div>
          <div className='mb-5'>
              <label htmlFor="subject" className='block mb-2.5 text-sm font-medium'>Subject</label>
              <input type="text" name='subject' id='subject' placeholder='lets talk...' className='bg-secondary border border-primary text-sm rounded-lg block w-full px-3 py-2.5 shadow-xs placeholder:text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-amber-300' required/>
          </div>
          <div className='mb-5'>
              <label htmlFor="message" className='block mb-2.5 text-sm font-medium'>Message</label>
              <textarea name='message' id='message' rows={4} placeholder='message' className='bg-secondary border border-primary text-sm rounded-lg block w-full px-3 py-2.5 shadow-xs placeholder:text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-amber-300' required/>
          </div>

          <button className='bg-accent px-12 py-3 rounded-lg text-white font-medium hover:shadow-lg hover:bg-amber-400 transition-all duration-300 hover:-translate-y-1 cursor-pointer'>Submit</button>
    </form>
  )
}

export default ContactForm