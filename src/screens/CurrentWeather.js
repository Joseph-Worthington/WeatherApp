import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    hilowrapper,
    hilo,
    bodywrapper,
    description,
    message,
  } = styles;
  return (
    <View style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          messageOne="High: 8"
          messageTwo="Low: 6"
          containerStyles={hilowrapper}
          messageOneStyles={hilo}
          messageTwoStyles={hilo}
        />
      </View>
      <RowText
        messageOne="Sunny"
        messageTwo="Perfect T-Shirt Weather"
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
  temp: {
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
