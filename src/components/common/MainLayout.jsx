import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'

export default function MainLayout() {
  return (
    <div>
    <Provider store = {store}>

      <Header/>
      <Outlet/>
      <Footer/>
    </Provider>
    </div>
  )
}
