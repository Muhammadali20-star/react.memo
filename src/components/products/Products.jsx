import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({data}) => {
   const navigate = useNavigate()
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-4xl mb-10 mt-4">Product</h2>
      <div className="grid grid-cols-4 gap-8 mb-10">
      {data?.map((item) => (
              <div key={item.id} className="w-72 bg-white shadow-md rounded-[8px] py-1 px-2 flex flex-col items-center justify-center gap-10">
                <div className="block mx-auto">
                <img onClick={()=> navigate(`/product/${item.id}`)} className="w-36" src={item.image} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                <h3 className="text-xl line-clamp-1 " title={item.title}><span className="font-bold">title:</span> {item.title}</h3>
                <h3 className="text-xl" ><span className="font-bold">price:</span> ${item.price}</h3>
                <h3 className="text-xl"><span className="font-bold">category:</span> {item.category}</h3>
                <h3 className="text-xl"><span className="font-bold">rate:</span> {item.rating.rate}</h3>
                <h3 className="text-xl"><span className="font-bold">count:</span> {item.rating.count}</h3>
                </div>
              </div>
            ))}
          </div>
      </div>
  );
};

export default React.memo(Products)
