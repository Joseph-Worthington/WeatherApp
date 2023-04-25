import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";
import IconText from "../components/IconText";

const City = () => {
  const { container, imageLayout, overlay, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city-background.jpg")}
        style={imageLayout}
      >
        <View style={overlay}>
          <Text style={[cityName, cityText]}>London</Text>
          <Text style={[countryName, cityText]}>UK</Text>
          <View style={[populationWrapper, rowLayout]}>
            <IconText
              iconName="users"
              iconColor="red"
              bodyText="8.9m"
              bodyTextStyles={populationText}
            />
          </View>
          <View style={[riseSetWrapper, rowLayout]}>
            <IconText
              iconName="sunrise"
              iconColor="white"
              bodyText="10:46:58am"
              bodyTextStyles={riseSetText}
            />
            <IconText
              iconName="sunset"
              iconColor="white"
              bodyText="17:28:15"
              bodyTextStyles={riseSetText}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 30,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
    marginTop: 10,
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
