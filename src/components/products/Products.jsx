import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({data}) => {
   const navigate = useNavigate()
  return (
    <div className="container mx-auto px-4">
  <h2 className="text-center text-4xl font-semibold my-10 text-gray-800">Products</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {data?.map((item) => (
      <div key={item.id}  className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer" >
        <img src={item.image} onClick={() => navigate(`/product/${item.id}`)} alt={item.title} className="w-28 h-32 object-contain mx-auto mb-4" />
        <div className="space-y-1 text-sm text-gray-700">
          <h3 className="font-semibold truncate" title={item.title}>{item.title}</h3>
          <p><span className="font-medium">Price:</span> ${item.price}</p>
          <p><span className="font-medium">Category:</span> {item.category}</p>
          <p><span className="font-medium">Rate:</span> {item.rating.rate}</p>
          <p><span className="font-medium">Count:</span> {item.rating.count}</p>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default React.memo(Products)
