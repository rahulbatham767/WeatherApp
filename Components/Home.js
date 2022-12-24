import axios from 'axios';
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Card from './Card';

import  './Detail';
// import Detail from './Detail';
import Spinner from './Spinner';
import './styles.css';





export const Home = (prop) => {

  // Use state for date Temp Condition 

  const [location, setLocation] = useState('jaipur');

  const [date, setDate] = useState([])
  const [date1, setDate1] = useState([])
  const [date2, setDate2] = useState([])


  const [temp, setTemp] = useState([])
  const [temp1, settemp1] = useState([])
  const [temp2, settemp2] = useState([])


  const [condition, setCondition] = useState([])
  const [condition1, setCondition1] = useState([])
  const [condition2, setCondition2] = useState([])

  const [humidity, setHumidity] = useState([])
  const [humidity1, setHumidity1] = useState([])
  const [humidity2, setHumidity2] = useState([])

  const [velocity, setVelocity] = useState([])
  const [velocity1, setVelocity1] = useState([])
  const [velocity2, setVelocity2] = useState([])

  const [uv, setUv] = useState([])
  const [uv1, setUv1] = useState([])
  const [uv2, setUv2] = useState([])

  const [place, setplace] = useState('Gwalior');
  const [region, setregion] = useState([])
  const [country, setcountry] = useState([])

  const [icon, seticon] = useState([])
  const [icon1, seticon1] = useState([])
  const [icon2, seticon2] = useState([])
  const [time, setTime] = useState([])


 
 
  const [loading, setloading] = useState(false)
const[ip,setip]=useState('')


  const ref = useRef(null)

  const weatherApi = {
    key: "86ad31b561a74e4aacf114320222412",
    baseUrl: "http://api.weatherapi.com/v1/forecast.json?key",

  }


  const city = (e) => {
    // console.log(e.target.value);
    console.log(e.target.value);
    setplace(e.target.value);
   
  };

  const town=(e)=>{
    if (e.charCode===13) {  
      console.log("enter");   
      myclick();
     
    }
  }

  const myclick = () => {
    getweather();
    getip();
    if (!loading) {
      display();
    }

  }

  const getip=async()=>{
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setip(res.data.IPv4)
  }



  const display = () => {
    const a = document.getElementById('show');
    a.classList.remove('d-none');
    const b = document.getElementById('region');
    b.classList.remove('d-none');
    

  }


  const getweather = async () => {
    try {

      setloading(true);
      let url = `${weatherApi.baseUrl}=${weatherApi.key}&q=${place}&days=3&aqi=no&alerts=no`;
      const response = await fetch(url);
      const data = await response.json();
      setLocation(data.location.name);
      setDate(data.location.localtime);
      setTemp(data.current.temp_c);
      setHumidity(data.current.humidity)
      setCondition(data.current.condition.text);
      setTime(data.location)
      setVelocity(data.current.wind_mph)
      setUv(data.current.uv);
      show(data.forecast.forecastday[1], data.forecast.forecastday[2], data.location, data.current);


      setloading(false)
 
    } catch (error) {
      console.log(error);
    }
  }

  const show = (forecast, tomorrow,  region, current) => {
    setDate1(forecast.date);
    setDate2(tomorrow.date);
    settemp1(forecast.day.maxtemp_c);
    settemp2(tomorrow.day.maxtemp_c);
    setHumidity1(forecast.day.avghumidity)
    setHumidity2(tomorrow.day.avghumidity)
    setVelocity1(forecast.day.maxwind_mph);
    setVelocity2(tomorrow.day.maxwind_mph);
    setCondition1(forecast.day.condition.text);

    seticon1(forecast.day.condition.icon);
    seticon2(tomorrow.day.condition.icon);


    setCondition2(tomorrow.day.condition.text);

    setUv1(forecast.day.uv);
    setUv2(tomorrow.day.uv);

    setcountry(region.country)
    setregion(region.region)

    seticon(current.condition.icon)
    
  }

  
  useEffect(() => {
    getweather();
console.log("run");
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

return (
  <>
{/* <Detail/> */}
    <div className="app-main container-fluid">

      <div className="searchInputBox" >
        <input
          type="text"
          id="input-box"
          onChange={(e) => city(e)}
          className="input-box"
          placeholder="  Enter city name..."
          autoComplete="off"
          ref={ref}
        />

        <span><i className="fa-solid fa-magnifying-glass" onClick={myclick}  ></i></span>

       
      </div>
    </div>
    <div className="line container">
      <div className="region text-white text-center d-flex d-none" id='region' style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="left">
          <h3>{region} </h3>
          <h3>{country} </h3>
        </div>
        <div className="right mt-2">
          <h3>{time.tz_id}</h3>
          <h3>Lon:{time.lon}</h3>
          <h3>Lat:{time.lat}</h3>
        </div>
      </div>
      {loading && <Spinner/>}

      <div className='justify-content-center container d-none shadow-none row' id='show' >



        <Card city={location}   date={date} temp={temp} condition={condition} humidity={humidity} velocity={velocity} uv={uv} icon={icon} />
        <Card city={location}   date={date1} temp={temp1} condition={condition1} humidity={humidity1} velocity={velocity1} uv={uv1} icon={icon1} />
        <Card city={location}   date={date2} temp={temp2} condition={condition2} humidity={humidity2} velocity={velocity2} uv={uv2} icon={icon2} />
<div style={{textAlign:"right",color:"white"}}>IP: {ip}</div>
      </div>
    </div>


  </>
)


  }