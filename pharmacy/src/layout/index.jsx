import React from 'react'
import Navbar from '../components/header'
import {Outlet} from 'react-router-dom'
import Footer from '../components/footer'

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout