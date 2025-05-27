import React from "react";
import Products from "../../components/products/Products";
import { useFetch } from "../../hooks/useFetch";
import Skeleton from '../skeleton/Skeleton'

const Home = () => {
  const {data,error, loading} = useFetch("/products")
  
  if(error) {
    return <div className='text-center text-red-500'>
      <p>Somthing went wrong :(</p>
    </div>
  }

  return (
    <div id="home">
      <Products data={data}/>
      {loading && <Skeleton count={20}/>}
      
    </div>
  );
};

export default React.memo(Home)
