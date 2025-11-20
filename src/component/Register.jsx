import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Signup</h2>
      <form action="">
<div className='mb-4'>
    <label htmlFor="" className='block text-gray-700'>Name</label>
    <input type="text"  className='w-full px-3 py-2 border'
    placeholder='Enter the name'
    />
</div>

<div className='mb-4'>
    <label htmlFor="" className='block text-gray-700'>Password</label>
    <input type="password" className='w-full px-3 py-2 border' 
    placeholder='Enter the password'
    />
</div>


<div className='mb-4'>
<button type='submit' className='w-full bg-blue-400 text-white py-2'>Signup</button>
</div>
      </form>
      <div className='text=center'>
        <span className='text-gray-700'>Aldery Have an Account?</span>
        <button className='text-blue-400 ml-3' onClick={openLogin}>Login</button>
      </div>
    </div>
  )
}

export default Register