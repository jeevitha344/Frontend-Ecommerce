import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';

import { loginuser } from '../redux/productThunk';
import { useNavigate } from 'react-router-dom';

const Login = ({openSignUp,setIsOpenModel,setIsLoggedIn}) => {
const dispatch = useDispatch()
const navigate= useNavigate()
const [data,setData]=useState({username: "",
  password: ""})

const handler = (e)=>{
  setData({
      ...data,
      [e.target.name]: e.target.value
    })
}
const handleSubmit = async (e) =>{
  e.preventDefault();
  try{
    const resp =await dispatch(loginuser(data)).unwrap() //unwrap() allows a component to directly access the fulfilled or rejected value
    //  returned by a Redux async   return response.data ---> resp === response.data
    localStorage.setItem("access", resp.access); 
    setIsOpenModel(false); // close modal
    setIsLoggedIn(true); // When login succeeds, Login calls this function to update the parent’s state, 
// and the parent component re-renders to show the Logout button.
      if (resp.is_superuser || resp.is_staff) {
        
      alert("Admin login successful!")
      navigate('dashboard/')
    } else {
      alert("User login successful!")
      navigate('collection/')
    }

   

  }
  catch(err){
    console.log("Login failed", err);
  }
}


  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form onSubmit={handleSubmit}>
<div className='mb-4'>
    <label htmlFor="" className='block text-gray-700'>username</label>
    <input type="text"  className='w-full px-3 py-2 border'
    placeholder='Enter the username'
    name='username' onChange={handler}
    />
</div>

<div className='mb-4'>
    <label htmlFor="" className='block text-gray-700'>Password</label>
    <input type="password" className='w-full px-3 py-2 border' 
    placeholder='Enter the password'
    name='password' onChange={handler}
    />
</div>

<div className='mb-4 flex items-center justify-between'>
<label htmlFor="" className='inline-flex item-center'>

    <input type="checkbox"
    className='form-checkbox' />
    <span className='ml-2 text-gray-700'>Remember Me</span>

</label>
    <a href="#" className='text-red-800'>forgot password</a>

</div>
<div className='mb-4'>
<button type='submit' className='w-full bg-blue-400 text-white py-2'>Login</button>
</div>
      </form>
      <div className='text=center'>
        <span className='text-gray-700'>Don't Have an Account?</span>
        <button className='text-blue-400 ml-3' onClick={openSignUp}>  Signup</button>
      </div>
    </div>
 
  )
}

export default Login
