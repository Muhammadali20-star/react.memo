import React, { lazy } from 'react'
import { Routes, Route,  } from 'react-router-dom'
import { Suspense } from '../utils'
const Home = lazy(() => import("./home/Home"))
const Layout = lazy(() => import("./layout/Layout"))
const Users = lazy(() => import("./users/Users"))
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
          <Route path='/product/:id' element={<Suspense><ProductDetail/></Suspense>}/>
          <Route path='/users/:id' element={<Suspense><UsersDateil/></Suspense>}/>
          <Route path='*' element={<Suspense><NotFound/></Suspense>}/>
        </Route>
      </Routes>
    </>
  )
}

export default React.memo(MainRouters)