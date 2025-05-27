import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./style.css"

const Header = () => {
  const {pathname} = useLocation()
  
  return (
    <header className="p-6 bg-blue-950 text-white">
      <div className="container mx-auto text-2xl flex justify-between">
      <Link className={"header-link"} to={"/"}>MyApp</Link>
      <nav className="flex gap-8">
      <NavLink className={"header-link"} to={"/"}>Home</NavLink>
      <NavLink className={"header-link"} to={"/users"}>Users</NavLink>
      {/* <NavLink className={"header-link"} to={"/recipe"}>Recipe</NavLink> */}
      {/* <NavLink className={"header-link"} to={"/posts"}>Post</NavLink> */}
      {/* <NavLink className={"header-link"} to={"/login"}>Sign in</NavLink> */}
      {/* <NavLink className={"header-link"} to={"/dashboard"}>Dashboard</NavLink> */}
      </nav>
      </div>
    </header>
  );
};

export default React.memo(Header)
