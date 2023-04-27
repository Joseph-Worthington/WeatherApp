import React from "react";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = ({ weatherData }) => {
    return(
        <Tab.Navigator 
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarStyle : {
            backgroundColor: 'white',
            
            },
            headerStyle : {
                backgroundColor: 'darkBlue',
            },
            headerTitleStyle : {
                fontWeight: 'bold',
                color: 'white',
                fontSize: 25,
            },
            headerTitleAlign: 'center'
        }}
        
      >
        <Tab.Screen name="Current Weather"  options={{
          tabBarIcon: ({ focused }) => (<Feather name="droplet" size={25} color={focused ? "tomato" : "black"} 
        />)
        }} 
        >
          {() => <CurrentWeather weatherData={weatherData.list[0]} />}
        </Tab.Screen>
        <Tab.Screen name="Upcoming Weather" options={{
          tabBarIcon: ({ focused }) => (<Feather name="clock" size={25} color={focused ? "tomato" : "black"} />)
        }}
        >
          {() => <UpcomingWeather weatherData={weatherData.list} />}
        </Tab.Screen>
        <Tab.Screen name="City" component={City} options={{
          tabBarIcon: ({ focused }) => (<Feather name="home" size={25} color={focused ? "tomato" : "black"} />)
        }}
        />
      </Tab.Navigator>
    );
};

export default Tabs;