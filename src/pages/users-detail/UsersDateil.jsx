import React from "react";
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const UsersDateil = () => {
    const { id } = useParams();
  

  const {data,error, loading} = useFetch(`/users/${id}`)
  
  
  
  return (
    <div className="max-w-sm mx-auto mt-16 p-6 bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl transition-all hover:shadow-2xl duration-300">
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md"></div>
    <h2 className="text-xl font-bold text-gray-800">
      {data?.name.firstname} {data?.name.lastname}
    </h2>
    <p className="text-sm text-gray-500">{data?.email}</p>
  </div>
  <div className="mt-6 flex flex-col gap-3 text-sm text-gray-700">
    <div className="flex items-center gap-2">
      <span className="text-blue-500">👤</span>
      <span><strong>Username:</strong> {data?.username}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-red-500">🔒</span>
      <span><strong>Password:</strong> {data?.password}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-green-500">📞</span>
      <span><strong>Phone:</strong> {data?.phone}</span>
    </div>
  </div>

  <div className="mt-6 text-center">
    <button className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow hover:brightness-110 transition">Contact User</button>
  </div>
</div>

  )
}

export default React.memo(UsersDateil)