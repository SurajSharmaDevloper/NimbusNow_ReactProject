import React, { useEffect, useState } from 'react'
import Card from './card'
import SearchBar from './searchBar'
import cloud from '../../assets/rainy-outline.svg'
import '../Css/WeatherCard.css'


const WeatherCard = () => {
  const [now, setNow] = useState(new Date());
  let Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
  let Months = ['January', 'February ', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decmber'];
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);

  }, []);



  return (
    <>
      <Card heading='Current Weather'>
        <div className='main'>
          <div className='mainChild'>
            <div className='child-1'>
              <div class="card-footer" id="card-footer">
                <p><i class='bx  bx-location'></i> <a href="#">{now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</a> </p>
                <p><i class='bx  bx-calendar-week'></i> <a href="#"><span id="day">{Days[now.getDay()]}</span>,<span
                  id="date"> {now.getDate()} {Months[now.getDay()]} {now.getFullYear()}</span></a> </p>
              </div>
              {/* <h2>{now.getDate()} {Months[now.getDay()]} {now.getFullYear()}</h2> */}
            </div>
            <div className='child-2'>
              <div>
                <img src="https://openweathermap.org/img/wn/04d.png" alt="" />
              </div>
              <div>
                <h1>29&deg;C</h1>
                <p>heavy rain</p>
              </div>
            </div>
            <div className='child-3'>
              <div>
                <i class='bxr  bx-water-drop-alt'  ></i>
                <p>53%</p>
              </div>
              <div>
                <i class='bxr  bx-tachometer-alt'  ></i>
                <p>1000hpa</p>
              </div>
              <div>
                <i class='bxr  bx-wind'  ></i>
                <p>3.8km/h</p>
              </div>
              <div>
                <i class='bxr  bx-eye-alt'  ></i>
                <p>10km</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}

export default WeatherCard
