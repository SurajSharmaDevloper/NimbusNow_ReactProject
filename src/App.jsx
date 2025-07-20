
import './App.css'
import Sidebar from './Component/ui/sidebar'
import Navbar from './Component/ui/navbar'
import Maps from './Component/ui/maps'
import OtherCities from './Component/ui/otherCities'
import WeatherCard from './Component/ui/WeatherCard'
import ForcastCard from './Component/ui/forcastCard'
import HourlyForecast from './Component/ui/hourlyForecast'


function App() {


  return (
    <>
    <div style={{display:'flex', alignItems:'start'}}>
      <HourlyForecast />  
    </div>  
    </>
  )
}

export default App
