import React from "react";
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const UsersDateil = () => {
    const { id } = useParams();
  

  const {data,error, loading} = useFetch(`/users/${id}`)
  
  
  
  return (
  <div className="max-w-sm mx-auto mt-16 p-5 bg-white border border-gray-200 rounded-xl shadow-md transition hover:shadow-lg">
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 mb-4 rounded-full bg-gray-300 flex items-center justify-center text-2xl text-white font-bold"></div>
      <h2 className="text-lg font-semibold text-gray-800">
        {data?.name.firstname} {data?.name.lastname}
      </h2>
      <p className="text-xs text-gray-500">{data?.email}</p>
    </div>
    <div className="mt-5 space-y-2 text-sm text-gray-700">
      <p><strong>Username:</strong> {data?.username}</p>
      <p><strong>Password:</strong> {data?.password}</p>
      <p><strong>Phone:</strong> {data?.phone}</p>
    </div>
  </div>
  )
}

export default React.memo(UsersDateil)