import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";
import { useGetWeather } from "./src/hooks/useGetWeather";
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {

  const [isLoading, errorMsg, weatherData] = useGetWeather()

  if(weatherData && weatherData.list) {
    return (
      <NavigationContainer>
          <Tabs weatherData={weatherData}/>
      </NavigationContainer>
    );
  }

  if(isLoading) {
    return(
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    )
  }

  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;

