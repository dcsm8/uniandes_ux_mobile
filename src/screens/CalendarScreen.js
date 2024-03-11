import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { List, IconButton, Appbar } from "react-native-paper";
import TopAppBar from "../components/TopAppBar";

export default function CalendarScreen({ navigation }) {
  const appointments = [
    {
      id: 1,
      name: "Sesión con Oscar Fonseca",
      date: "25 Febrero 9:00 AM",
      icon: "weather-sunny",
    },
    {
      id: 2,
      name: "Sesión con Jorge Arias",
      date: "26 Febrero 9:00 AM",
      icon: "weather-partly-cloudy",
    },
    {
      id: 3,
      name: "Sesión con Oscar Fonseca",
      date: "27 Febrero 9:00 AM",
      icon: "weather-rainy",
    },
    {
      id: 4,
      name: "Sesión con Jorge Arias",
      date: "28 Febrero 9:00 AM",
      icon: "weather-snowy",
    },
  ];

  return (
    <>
      <TopAppBar navigation={navigation} title="Calendario" />
      <View style={styles.container}>
        <View style={styles.dateHeader}>
          <IconButton
            icon="chevron-left"
            size={24}
            onPress={() => console.log("Previous month")}
          />
          <Text style={styles.dateHeaderText}>Febrero</Text>
          <IconButton
            icon="chevron-right"
            size={24}
            onPress={() => console.log("Next month")}
          />
        </View>
        <List.Section>
          {appointments.map((appointment) => (
            <List.Item
              key={appointment.id}
              title={appointment.name}
              description={appointment.date}
              left={(props) => <List.Icon {...props} icon={appointment.icon} />}
              style={styles.listItem}
            />
          ))}
        </List.Section>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dateHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dateHeaderText: {
    marginHorizontal: 16,
    fontSize: 18,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
});
