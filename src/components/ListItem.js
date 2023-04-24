import React from "react";
import {  Text,  View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ListItem = (props) => {
  const { dt_text, min, max, condition } = props;
  const { item, temp, date } = styles;
  return (
    <View style={item}>
      <Feather name="cloud-rain" size={50} color="white" />
      <Text style={date}>{dt_text}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 5,
        backgroundColor: "hsla(4, 86%, 58%, 0.92)",
      },
      temp: {
        color: "white",
        fontSize: 20,
      },
      date: {
        color: "white",
        fontSize: 15,
      },
});

export default ListItem;