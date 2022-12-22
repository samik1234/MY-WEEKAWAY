import React from 'react';

const Gallery = () => {
  return (
    <div id ='gallery' className='max-w-[1140px]  m-auto w-full px-4 py-16'>
<h2 className='text-center text-gray-700 p-4 font-bold'>Gallery</h2>

<div className='grid sm:grid-cols-6 gap-4'>
  <div className='sm:col-span-3 col-span-2 rows-span-2'>
    <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60' alt='/'/>
  </div>
  <div>
  <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80' alt='/'/>
  </div>
  <div>
  <img className='w-full h-full object-cover' src='https://plus.unsplash.com/premium_photo-1661839562817-6effe93f685d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGRpdmVzJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' alt='/'/>
  </div>
  <div>
  <img className='w-full h-full object-cover'
  src='https://images.unsplash.com/photo-1586861642026-74a6da22a3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbGRpdmVzJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' alt='/'/>
  </div>

  <div>
  <img className='w-full h-full object-cover'
  src='https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZGl2ZXMlMjBiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt='/'/>
  </div>
  <div>
  <img className='w-full h-full object-cover'
  src='https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80 'alt='/'/>
  </div>

</div>
     
    </div>

  )
}

export default Gallery;