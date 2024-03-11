import { createStackNavigator } from "@react-navigation/stack";
import AlarmScreen from "../screens/AlarmScreen";
import CreateAlarmScreen from "../screens/CreateAlarmScreen";
import EditAlarmScreen from "../screens/EditAlarmScreen";
import { IconButton } from "react-native-paper";
import MapScreen from "../screens/MapScreen";

const AlarmStack = createStackNavigator();

function AlarmStackNavigator() {
  return (
    <AlarmStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "rgb(0, 95, 175)",
        },
        headerTintColor: "rgb(255, 255, 255)",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <AlarmStack.Screen
        name="AlarmList"
        component={AlarmScreen}
        options={({ navigation }) => ({
          title: "Alarma",
          headerLeft: () => (
            <IconButton
              icon="menu"
              onPress={() => navigation.toggleDrawer()}
              iconColor="rgb(255, 255, 255)"
              style
            />
          ),
        })}
      />
      <AlarmStack.Screen
        name="CreateAlarm"
        component={CreateAlarmScreen}
        options={{ title: "Crear Alarma" }}
      />
      <AlarmStack.Screen
        name="EditAlarm"
        component={EditAlarmScreen}
        options={({ navigation }) => ({
          title: "Editar Alarma",
          headerRight: () => (
            <IconButton
              icon="delete"
              color="rgb(255, 255, 255)"
              iconColor="rgb(255, 255, 255)"
            />
          ),
        })}
      />
      <AlarmStack.Screen
        name="Map"
        component={MapScreen}
        options={{ title: "Mapa" }}
      />
    </AlarmStack.Navigator>
  );
}

export default AlarmStackNavigator;
