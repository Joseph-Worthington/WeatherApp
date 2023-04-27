import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/WeatherType";

const CurrentWeather = ({weatherData}) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    hilowrapper,
    hilo,
    bodywrapper,
    description,
    message,
  } = styles;
  const { main: {temp, feels_like, temp_max, temp_min}, weather} = weatherData

  const weatherCondition = weather[0].main;

  return (
    <View style={[wrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>{`Feels like ${feels_like}`}</Text>
        <RowText
          messageOne={`High: ${temp_max}`}
          messageTwo={`Low: ${temp_min}`}
          containerStyles={hilowrapper}
          messageOneStyles={hilo}
          messageTwoStyles={hilo}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={bodywrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
    height: 1000,
  },
  tempStyles: {
    fontSize: 48,
    color: "black",
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  hilo: {
    fontSize: 20,
    color: "black",
  },
  hilowrapper: {
    flexDirection: "row",
  },
  bodywrapper: {
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
    color: "black",
  },
  message: {
    fontSize: 30,
    color: "black",
  },
});

export default CurrentWeather;
