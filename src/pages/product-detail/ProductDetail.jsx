import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const ProductDetail = () => {
  const { id } = useParams();

  useEffect(()=>{
    scrollTo(0,0)
  }, [id])

  const {data,error, loading} = useFetch(`/products/${id}`)

  return (
    <div className="container mx-auto max-w-4xl py-12 px-6 bg-white shadow-xl rounded-3xl flex gap-12 mt-6 items-center justify-center">
    <img className="w-64 rounded-xl object-contain" src={data?.image} alt={data?.title} />
    
    <div className="flex flex-col gap-4 text-gray-800">
      <h1 className="text-3xl font-bold">{data?.title}</h1>
      <strong className="text-4xl text-green-600">${data?.price}</strong>
      <p className="flex items-center gap-2 text-yellow-500 font-medium">
        ★ 5.0 <span className="text-gray-500 text-sm">(4 reviews)</span>
      </p>
      <p className="text-gray-600 leading-relaxed">{data?.description}</p>
      {/* <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 w-fit">
        Add to Cart
      </button> */}
    </div>
  </div>
  
  );
};

export default React.memo(ProductDetail)
