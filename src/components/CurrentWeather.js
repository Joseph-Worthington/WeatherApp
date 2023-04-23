import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const CurrentWeather = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.hilowrapper}>
          <Text style={styles.hilo}>High: 8</Text>
          <Text style={styles.hilo}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodywrapper}>
        <Text style={styles.description}>Sunny</Text>
        <Text style={styles.message}>Perfect T-Shirt Weather</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    height: 1000
  },
  temp: {
    fontSize: 48,
    color: 'black'
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  hilo: {
    fontSize: 20,
    color: 'black'
  },
  hilowrapper: {
    flexDirection: 'row',
  },
  bodywrapper: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48,
    color: 'black'
  },
  message: {
    fontSize: 30,
    color: 'black'
  }
});

export default CurrentWeather;