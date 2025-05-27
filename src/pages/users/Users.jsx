import React from "react";
import User from "../../components/user/User";
import { useFetch } from "../../hooks/useFetch";
import Skeleton from "../skeleton/Skeleton";

const Users = () => {
  const {data,error, loading} = useFetch("/users")

  if(error) {
    return <div className='text-center text-red-500'>
      <p>Somthing went wrong :(</p>
    </div>
  }

  return (
    <div id="about">
    <User data={data}/>
    {loading && <Skeleton count={10}/>}
    </div>
  );
};

export default React.memo(Users)
