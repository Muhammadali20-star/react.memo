import React from "react";
import User from "../../components/user/User";
import { useFetch } from "../../hooks/useFetch";
import Skeleton from "../skeleton/Skeleton";

const Users = () => {
  const {data,error, loading} = useFetch("/users")
  return (
    <div id="about">
    <User data={data}/>
    {loading && <Skeleton count={10}/>}
    </div>
  );
};

export default React.memo(Users)
