import React from 'react'
import '../Css/navBtn.css'
import '../Css/media.css'
import Button from './button'


const NavBtn = () => {
    return (
        <div className='NavBtn'>
            <div>
                <Button
                 content='Location'
                 logo='bx-location'
                >
                </Button>
            </div>
        </div>
    )
}

export default NavBtn;
