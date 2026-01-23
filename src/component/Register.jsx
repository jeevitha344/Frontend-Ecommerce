import React from 'react'
import { useState } from 'react';
import { useDispatch} from "react-redux";
import { signupuser } from "../redux/productThunk"; 
import { useNavigate } from 'react-router-dom';
const Register = ({openLogin}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userdata,setUserdata]=useState({
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  password: ''
  })
  const handlechange=(e)=>{
    setUserdata({
      ...userdata,
      [e.target.name]: e.target.value
    })
  }
   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await dispatch(signupuser(userdata)).unwrap();
      console.log("User created:", res);
      alert(" signup Successfully!! ");
      openLogin(); 
     
    } catch (err) {
      console.error("Signup error:", err);
      
    }
  };
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Signup</h2>
      <form onSubmit={handleSubmit}  >

<div className='mb-4'>
    <label htmlFor="" className='block text-gray-700'>firstname</label>
    <input type="text"  className='  w-full px-3 py-2 border'
    placeholder='Enter the firstname'
    name='first_name'
    onChange={handlechange}
    />
</div>

<div className='mb-4'>
    <label htmlFor="" className='block text-gray-700'>lastname</label>
    <input type="text"  className=' w-full px-3 py-2 border'
    placeholder='Enter the lastname'
      name='last_name'
    onChange={handlechange}
    />
</div>

<div className='mb-4'>
    <label htmlFor="" className='block text-gray-700'>username</label>
    <input type="text"  className='w-full px-3 py-2 border'
    placeholder='Enter the name'
      name='username'
    onChange={handlechange}
    />
</div>
<div className='mb-4'>
    <label htmlFor="" className='block text-gray-700'>Email</label>
    <input type="email" className='w-full px-3 py-2 border' 
    placeholder='Enter the email'
    name='email'
    onChange={handlechange}
    />
</div>

<div className='mb-4'>
    <label htmlFor="" className='block text-gray-700'>Password</label>
    <input type="password" className='w-full px-3 py-2 border' 
    placeholder='Enter the password'
    name='password'
    onChange={handlechange}
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