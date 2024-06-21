import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from './RootLayout';
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import About from './components/about/About'
import RoutingError from './components/RoutingError';
import UserProfile from './components/user-profile/UserProfile';
import './App.css'

function App() {
  const browser=createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      errorElement:<RoutingError/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'about',
          element:<About/>
        },
        {
          path:'user-profile',
          element:<UserProfile/>
        }
      ]
    }
  ])
  return (
    <div className='main'>
      <RouterProvider router={browser}/>
    </div>
  )
}

export default App