import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../modules/components/Footer'
import Header from '../../modules/components/Header'

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
