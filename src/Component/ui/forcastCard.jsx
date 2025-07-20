import React from 'react'
import Card from  '../ui/card.jsx'
import BoxModle from './BoxModle.jsx'

const ForcastCard = () => {
  return (
    <Card heading='7 days forcast'>
        <div className='container'>
           <BoxModle content2='Tuesday' content3='29C'></BoxModle>
           <BoxModle content2='Wednesday' content3='29C'></BoxModle>
           <BoxModle content2='Wednesday' content3='29C'></BoxModle>
           <BoxModle content2='Wednesday' content3='29C'></BoxModle>
           <BoxModle content2='Wednesday' content3='29C'></BoxModle>
           <BoxModle content2='Wednesday' content3='29C'></BoxModle>
           <BoxModle content2='Wednesday' content3='29C'></BoxModle>
        </div>
    </Card>
  )
}

export default ForcastCard
