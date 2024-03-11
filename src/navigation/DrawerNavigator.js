import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CalendarScreen from "../screens/CalendarScreen";
import WeatherScreen from "../screens/WeatherScreen";
import BlueGoldenHourScreen from "../screens/BlueGoldenHourScreen";
import AlarmStackNavigator from "./AlarmStackNavigator";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Calendario"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Calendario" component={CalendarScreen} />
      <Drawer.Screen name="Clima" component={WeatherScreen} />
      <Drawer.Screen name="Hora azul/dorada" component={BlueGoldenHourScreen} />
      <Drawer.Screen name="Alarma" component={AlarmStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
