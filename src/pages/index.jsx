import React, { lazy } from 'react'
import { Routes, Route,  } from 'react-router-dom'
import { Suspense } from '../utils'
const Home = lazy(() => import("./home/Home"))
const Layout = lazy(() => import("./layout/Layout"))
const Contact = lazy(() => import("./contact/Contact"))
const Users = lazy(() => import("./users/Users"))
const Login = lazy(() => import("./login/Login"))
const NotFound = lazy(() => import("./not-found/NotFound"))
const ProductDetail = lazy(() => import("./product-detail/ProductDetail"))
const UsersDateil = lazy(() => import("./users-detail/UsersDateil"))

const MainRouters = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Suspense><Layout/></Suspense>}>
          <Route path='/' element={<Suspense><Home/></Suspense>}/>
          <Route path='/users' element={<Suspense><Users/></Suspense>}/>
          <Route path='/contact' element={<Suspense><Contact/></Suspense>}/>
          <Route path='/product/:id' element={<Suspense><ProductDetail/></Suspense>}/>
          <Route path='/users/:id' element={<Suspense><UsersDateil/></Suspense>}/>
          <Route path='*' element={<Suspense><NotFound/></Suspense>}/>
        </Route>

        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='' element={<Group/>}/>
            <Route path='student' element={<Student/>}>
               <Route path='' element={<ActiveStudent/>}/>
               <Route path='graduated-student' element={<GraduatedStudent/>}/>
               <Route path='inactive' element={<div>inActive</div>}/>
            </Route>
            <Route path='profile' element={<Profile/>}/>
        </Route> */}

      </Routes>
    </>
  )
}

export default React.memo(MainRouters)