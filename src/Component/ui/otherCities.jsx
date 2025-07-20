import React from 'react'
import Card from './card'
import BoxModle from './BoxModle'
import '../Css/otherCities.css'

const OtherCities = () => {
  return (
    <Card heading = 'Popular cities' >
        <div className='container'>
            <BoxModle/>
            <BoxModle/>
            <BoxModle/>
            <BoxModle/>
            <BoxModle/>
            <BoxModle/>
        </div>
    </Card>
  )
}

export default OtherCities
