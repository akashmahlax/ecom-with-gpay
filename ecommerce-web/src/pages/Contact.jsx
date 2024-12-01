import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='w-full min-h-screen bg-slate-800 text-blue-500 '>
      <form action="submit" method='submit' className='flex  gap-4 flex-col p-8 max-w-md mx-auto'  >
        <input type="text" name='name' placeholder='Name' className='p-2 rounded-lg bg-slate-600 ' />
        <input type="email" name='email' placeholder='Email'  className='p-2 rounded-lg bg-slate-600 '  />
        <input type="text-area" name='message' placeholder='Message' className='p-2 rounded-lg bg-slate-600 ' />
        <button type='submit' className='p-2 rounded-lg bg-slate-600 '>Submit</button>
      </form>

    </div>
    
    
    </>
  )
}

export default Contact