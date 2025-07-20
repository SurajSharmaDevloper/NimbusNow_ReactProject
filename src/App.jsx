
import './App.css'
import Sidebar from './Component/ui/sidebar'
import Navbar from './Component/ui/navbar'
import Maps from './Component/ui/maps'
import OtherCities from './Component/ui/otherCities'
import WeatherCard from './Component/ui/WeatherCard'
import ForcastCard from './Component/ui/forcastCard'


function App() {


  return (
    <>
    <div style={{display:'flex', alignItems:'start'}}>
      <Sidebar />
      <div style={{margin:'20px' , display:'flex', flexDirection:'column' , width:'100%'}}>
        <Navbar />
         <ForcastCard />
         <WeatherCard />
      </div>   
    </div>  
    </>
  )
}

export default App
