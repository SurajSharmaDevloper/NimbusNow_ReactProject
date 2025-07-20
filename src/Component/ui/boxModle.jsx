import React from 'react'
import '../Css/boxModle.css'

const BoxModle = ({ content2 = "delhi" , content3 ='Partly Cloud'}) => {
    return (
        <div className='Box'>
            <div>
                <i class='bxr  bx-cloud-rain'  ></i>
            </div>
            <div>
                <p>{content2}</p>
            </div>
            <div>
                <p>{content3}</p>
            </div>
        </div>
    )
}

export default BoxModle
