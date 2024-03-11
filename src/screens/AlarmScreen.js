import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { List, FAB, Switch } from "react-native-paper";

const AlarmScreen = ({ navigation }) => {
  const [appointments, setAppointments] = useState([
    {
      id: "1",
      date: "19 Febrero",
      client: "Sesión cliente 1",
      time: "06:30 a.m.",
      weatherIcon: "weather-partly-cloudy",
      enabled: false,
    },
    {
      id: "2",
      date: "19 Febrero",
      client: "Sesión cliente 2",
      time: "06:30 a.m.",
      weatherIcon: "weather-cloudy",
      enabled: true,
    },
    {
      id: "3",
      date: "20 Febrero",
      client: "Sesión cliente 3",
      time: "06:30 a.m.",
      weatherIcon: "weather-rainy",
      enabled: true,
    },
    {
      id: "4",
      date: "21 Febrero",
      client: "Sesión cliente 4",
      time: "06:30 a.m.",
      weatherIcon: "weather-snowy",
      enabled: true,
    },
  ]);

  const toggleAlarm = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, enabled: !appointment.enabled }
          : appointment
      )
    );
  };

  const navigateToEditAlarm = (id) => {
    navigation.navigate("EditAlarm", { alarmId: id });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={`${item.date} - ${item.client}`}
            description={item.time}
            left={(props) => (
              <List.Icon
                {...props}
                icon={item.weatherIcon}
                style={styles.listIcon}
              />
            )}
            right={(props) => (
              <Switch
                value={item.enabled}
                onValueChange={() => toggleAlarm(item.id)}
              />
            )}
            onPress={() => navigateToEditAlarm(item.id)}
            style={styles.listItem}
          />
        )}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate("CreateAlarm")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  listIcon: {
    marginLeft: 16,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default AlarmScreen;
