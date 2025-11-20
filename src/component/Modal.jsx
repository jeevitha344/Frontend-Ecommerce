import React, { Children } from 'react'

const Modal = ({isOpenModel,setIsOpenModel,children}) => {

// isopenmodel is false  give null

    if(!isOpenModel) return null; 
  return (
    <div className='fixed inset-0 bg-gray-800/75 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md'>
        <button className='absolute top-4 right-4 text-gray-300 text-3xl' onClick={()=>setIsOpenModel(false)}>&times;</button>
       {children}     {/* display the div element  */}
      </div>
    </div>
  )
}

export default Modal
