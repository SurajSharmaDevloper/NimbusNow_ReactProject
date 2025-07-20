import React from 'react'
import '../Css/sidebar.css'

const Sidebar = () => {
  return (
    <aside>
        <div className='label'>
            <div className='logo'>
                <i className='bxr  bx-cloud-alt'  ></i>
                <p>NimbusNow.in</p> 
            </div>
            <div className='sidebarlists'>
                <ul>
                    <li><i className='bxr  bx-dashboard-alt'  ></i></li>
                    <li><i className='bxr  bx-calendar-alt'  ></i></li>
                    <li><i className='bxr  bx-compass'  ></i></li>
                    <li><i className='bxr  bx-air'  ></i></li>
                    <li><i className='bxr  bx-cog'  ></i></li>
                    <li><i class='bxr  bx-user-circle'  ></i> </li>
                </ul>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar
