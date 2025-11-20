import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='bg-[#088178] text-white py-8 px-4 md:px-16  lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3'>
        <div>
        <h3 className='text-xl font-semibold'>FOREVER</h3>
<p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nostrum corrupti dolor.</p>  
        </div>
  
      <div className='flex flex-col md:items-center'>
        <h4 className='text-lg font-semibold mr-6'>Links</h4>
        <ul className='mt-4 space-y-2'>
          <li>
            <Link  to='/' className='hover:underline'>Home</Link>
          </li>
           <li>
            <Link to='/collection' className='hover:underline' >Collection</Link>
          </li>
           <li>
            <Link to='/about' className='hover:underline'>About</Link>
          </li>
           <li>
            <Link to='/contact' className='hover:underline'>Contact</Link>
          </li>
        </ul>
      </div>
       <div className=''>
       <h4 className='text-xl font-semibold'>Follow Us</h4> 
      <div className='flex space-x-4 mt-4'>
         <a href=""className='text-gray-400'><FaTwitter/></a>
          <a href=""className='text-gray-400'><FaGithub/></a>
           <a href=""className='text-gray-400'><FaLinkedin/></a>
        < a href=""className='text-gray-400'><FaFacebook/></a>
      </div>
      <form className='flex items-center justify-center mt-8' >
        <input type="email"  className='w-full p-2 rounded-lg bg-[#088178] border border-white'/>
        <button className='bg-amber-100 text-black px-4 py-2 rounded-lg ml-1'>Subscrib</button>
      </form>
       </div>
    </div>
    <div className=' mt-8 border-t border-gray-700 pt-4'>
    <div className='mx-auto flex flex-col md:flex-row justify-between items-center' >
      <p>&copy; 2025 Forver All right reserved</p>
      <div className='flex space-x-4 mt-4 md:mt-0'>
        <a href="" className='hover:underline'>Privacy Policy</a>
        <a href="" className='hover:underline'>Tearms & Conditions</a>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Footer