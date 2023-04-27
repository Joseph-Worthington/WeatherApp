import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const [weatherData, setWeatherData] = useState([]);
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);


    const getWeatherData = async () => {
        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
          const data = await response.json();
          setWeatherData(data);
        } catch (error) {
          setError('Could not fetch Weather Data')
          console.log(error);
        }finally{
          setIsLoading(false);
        }
      }
    
      useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if(status !== "granted") {
            setErrorMsg("Permission to access location was denied");
            return
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLat(location.coords.latitude);
          setLon(location.coords.longitude);
    
          await getWeatherData();
        }
    
        )();
      }, [lat, lon])

      return [isLoading, errorMsg, weatherData]
}