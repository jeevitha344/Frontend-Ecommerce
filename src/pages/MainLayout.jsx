import React from 'react'
import Footer from '../component/Footer'
import SearchBar from '../component/SearchBar'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = ({children}) => {
    
  return (
    <div>
      <Navbar />
      <SearchBar />
      <main><Outlet /></main>
      <Footer />
    </div>
  )
}

export default MainLayout
