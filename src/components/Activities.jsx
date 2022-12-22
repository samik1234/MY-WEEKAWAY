import React from 'react';

const Activities = () => {
  return (
    <div className='max-w-[1140px] mx-auto w-full md:flex mt-[-75px]'>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
      
      <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
      src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='/'/>
      </div>
      <div className='relative p-2'>
      <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruises</h3>
      
      <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
      src='https://images.unsplash.com/photo-1580166463495-ab4d21922c22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='/'/>
      </div>
      <div className='relative p-2'>
      <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold' >Excursions</h3>
      
      <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
      src='https://images.unsplash.com/photo-1574681289998-05cd669af0b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' alt='/'/>
      </div>
    </div>
  )
}

export default Activities;