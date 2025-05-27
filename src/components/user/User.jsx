import React from 'react'
import { useNavigate } from 'react-router-dom'

const User = ({data}) => {
    const navigate = useNavigate()
  return (
    <div className='mb-20'>
      <h2 className='text-center text-4xl mb-8'>Users</h2>
      <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2  gap-6'>
        {
          data?.map((item) => (
            <div key={item.id} className='bg-stone-100 text-[12px] flex flex-col gap-4  rounded-[10px] pb-10 p-1' onClick={()=> navigate(`/users/${item.id}`)} style={{boxShadow: '0 4px 10px rgba(10, 1, 1, 0.5)'}}>
              <h3><span className='font-bold'>firstname:</span> {item.name.firstname}</h3>
              <h3><span className='font-bold'>lastname:</span> {item.name.lastname}</h3>
              <h3><span className='font-bold'>email:</span> {item.email}</h3>
              <h3><span className='font-bold'>username:</span> {item.username}</h3>
              <h3><span className='font-bold'>password:</span> {item.password}</h3>
              <h3><span className='font-bold'>phone:</span> {item.phone}</h3>
              <h3><span className='font-bold'>city:</span> {item.address.city}</h3>
              <h3><span className='font-bold'>street:</span> {item.address.street}</h3>
              <h3><span className='font-bold'>number:</span> {item.address.number}</h3>
              <h3><span className='font-bold'>zipcode:</span> {item.address.zipcode}</h3>
              
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default React.memo(User)