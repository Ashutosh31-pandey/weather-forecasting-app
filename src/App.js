import './App.css';
import React,{ useEffect, useState } from "react";
import Weather from './component/weather';
export default function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position){
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    
  await fetch(`${process.env.REACT_APP_URL}/weather/?lat=${lat}&lon=${long}&units=metrics&units=metrics&APPID=${process.env.REACT_APP_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result)
        console.log(result);
      });

    console.log("Latitude is:",lat)
    console.log("Longitude is:",long)
  }, [lat, long]);

  return (
    <div className ="App">
      Weather Application using React.
    </div>
  );
}

