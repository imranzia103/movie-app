import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import Navigation from './pages/Auth/Navigation.jsx'


const App = () => {
  return (
    <>
    <ToastContainer />
    <Navigation />
    <main className='py-3'>

<Outlet />

    </main>
  </>
  )
}

export default App
