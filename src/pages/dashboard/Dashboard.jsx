import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./style.css"

const Dashboard = () => {
  return (
    <div className='flex'>
        <div className='w-[250px] h-screen bg-slate-900 p-4 text-white'>
            <h2>Dashboard</h2>
            <div>
                <NavLink className={"block mb-1 p-2 rounded sidebar-link"} end={true} to={""}>Group</NavLink>
                <NavLink className={"block mb-1 p-2 rounded sidebar-link"} to={"student"}>Student</NavLink>
                <NavLink className={"block mb-1 p-2 rounded sidebar-link"} to={"profile"}>Prfile</NavLink>
            </div>
        </div>
        <div className='flex-1 '>
          <div className='w-full h-16 bg-slate-900'>
          </div>
          <div className='p-4'>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard