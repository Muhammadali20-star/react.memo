import React from 'react'
import { useNavigate } from 'react-router-dom'

const User = ({data}) => {
    const navigate = useNavigate()
  return (
    <div className="mb-20">
  <h2 className="text-center text-4xl font-semibold mb-10 text-gray-800">Users</h2>
  <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 px-4">
    {data?.map((item) => (
      <div key={item.id} onClick={() => navigate(`/users/${item.id}`)} className="bg-white rounded-xl shadow-md hover:shadow-lg p-5" >
        <div className="space-y-1 text-sm text-gray-700">
          <p><span className="font-medium">Firstname:</span> {item.name.firstname}</p>
          <p><span className="font-medium">Lastname:</span> {item.name.lastname}</p>
          <p><span className="font-medium">Email:</span> {item.email}</p>
          <p><span className="font-medium">Username:</span> {item.username}</p>
          <p><span className="font-medium">Password:</span> {item.password}</p>
          <p><span className="font-medium">Phone:</span> {item.phone}</p>
          <p><span className="font-medium">City:</span> {item.address.city}</p>
          <p><span className="font-medium">Street:</span> {item.address.street}</p>
          <p><span className="font-medium">Number:</span> {item.address.number}</p>
          <p><span className="font-medium">Zipcode:</span> {item.address.zipcode}</p>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default React.memo(User)