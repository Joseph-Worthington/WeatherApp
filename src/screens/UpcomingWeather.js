import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

const UpcomingWeather = ({weatherData}) => {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        dt_text={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
        condition={item.weather[0].main}
      />
    );
  };
  const { container, image } = styles;
  return (
    <View style={container}>
      <ImageBackground
        source={require("../../assets/upcoming-background.jpg")}
        style={image}
      >

        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
export default UpcomingWeather;
