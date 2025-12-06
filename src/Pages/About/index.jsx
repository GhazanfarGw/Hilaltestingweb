import React from 'react'
import Header from '../Home/header'
import Dashboard from './Dashboard'
import Portfolio from './Portfolio'
import Footer from '../Home/Footer'
import Updates from '../Home/update'

export default function Index() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <Portfolio/>
      <Updates/>
      <Footer/>
    </>
  )
}
