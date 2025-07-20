import React from 'react'
import SearchBar from './searchBar'
import NavBtn from './navBtn'
import '../Css/navbar.css'
import '../Css/media.css'

const Navbar = () => {
  return (
    <nav className='Navbar'>
        <div className='main'>
            <div className="logo">
                <h1>NimbusNow.in</h1>
            </div>
            <div className='navList'>
                 <SearchBar />
                 <NavBtn />
            </div>
        </div>
    </nav>
  )
}

export default Navbar
