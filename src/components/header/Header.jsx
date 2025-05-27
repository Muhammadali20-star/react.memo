import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./style.css"

const Header = () => {
  const {pathname} = useLocation()
  
  return (
    <header className="p-6 bg-blue-950 container mx-auto max-w-[1515px] text-white">
      <div className="text-2xl container mx-auto flex justify-between">
      <Link className={"header-link"} to={"/"}>MyApp</Link>
      <nav className="flex gap-8">
      <NavLink className={"header-link"} to={"/"}>Home</NavLink>
      <NavLink className={"header-link"} to={"/users"}>Users</NavLink>
      </nav>
      </div>
    </header>
  );
};

export default React.memo(Header)
