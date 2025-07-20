import React from 'react'
import Card from './card'
import Items from './items'
import '../Css/hourlyForecast.css'

const HourlyForecast = () => {
  const stylingSheet = {
      backgroundColor : 'none'
  }



  return (
      <div className='container'>
        <div className='module'>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
        </div>
      </div>
  )
}

export default HourlyForecast;
