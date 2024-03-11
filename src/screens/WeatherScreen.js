import React from "react";
import { View, StyleSheet, ScrollView, FlatList, Text } from "react-native";
import { Card, List, Title, Subheading, Appbar } from "react-native-paper";
import TopAppBar from "../components/TopAppBar";

export default function WeatherScreen({ navigation }) {
  const hourlyWeather = [
    { id: "1", time: "6 a.m.", temperature: "15°", icon: "weather-sunset-up" },
    {
      id: "2",
      time: "7 a.m.",
      temperature: "16°",
      icon: "weather-partly-cloudy",
    },
    { id: "3", time: "8 a.m.", temperature: "17°", icon: "weather-cloudy" },
    { id: "4", time: "9 a.m.", temperature: "18°", icon: "weather-fog" },
    { id: "5", time: "10 a.m.", temperature: "19°", icon: "weather-sunny" },
    { id: "6", time: "11 a.m.", temperature: "21°", icon: "weather-sunny" },
    { id: "7", time: "12 p.m.", temperature: "22°", icon: "weather-sunny" },
    { id: "8", time: "1 p.m.", temperature: "23°", icon: "weather-sunny" },
    { id: "9", time: "2 p.m.", temperature: "24°", icon: "weather-sunny" },
    { id: "10", time: "3 p.m.", temperature: "24°", icon: "weather-sunny" },
    { id: "11", time: "4 p.m.", temperature: "23°", icon: "weather-sunny" },
    { id: "12", time: "5 p.m.", temperature: "22°", icon: "weather-sunset" },
    { id: "13", time: "6 p.m.", temperature: "20°", icon: "weather-night" },
    { id: "14", time: "7 p.m.", temperature: "18°", icon: "weather-night" },
    { id: "15", time: "8 p.m.", temperature: "17°", icon: "weather-night" },
    { id: "16", time: "9 p.m.", temperature: "16°", icon: "weather-night" },
    { id: "17", time: "10 p.m.", temperature: "15°", icon: "weather-night" },
  ];

  const weeklyForecast = [
    { id: "1", day: "Lunes", description: "Soleado", icon: "weather-sunny" },
    {
      id: "2",
      day: "Martes",
      description: "Parcialmente nublado",
      icon: "weather-partly-cloudy",
    },
    {
      id: "3",
      day: "Miércoles",
      description: "Nublado",
      icon: "weather-cloudy",
    },
    {
      id: "4",
      day: "Jueves",
      description: "Lluvia ligera",
      icon: "weather-rainy",
    },
    {
      id: "5",
      day: "Viernes",
      description: "Tormentas",
      icon: "weather-lightning-rainy",
    },
    {
      id: "6",
      day: "Sábado",
      description: "Mayormente soleado",
      icon: "weather-partly-cloudy",
    },
    {
      id: "7",
      day: "Domingo",
      description: "Despejado",
      icon: "weather-night",
    },
  ];

  const renderHeader = () => (
    <>
      {/* Current Weather */}
      <View style={styles.section}>
        <Title style={styles.title}>Clima actual</Title>
        <Card style={styles.currentWeatherCard}>
          <Card.Title
            title="Nubes y Sol"
            subtitle="21°"
            left={(props) => (
              <List.Icon {...props} icon="weather-partly-cloudy" />
            )}
          />
        </Card>
      </View>

      {/* Hourly Forecast */}
      <View style={styles.section}>
        <Title style={styles.title}>Previsión horas</Title>
        <ScrollView horizontal style={styles.hourlyForecast}>
          {hourlyWeather.map((weather) => (
            <Card key={weather.id} style={styles.weatherCard}>
              <Card.Content>
                <List.Icon icon={weather.icon} />
                <Subheading>{weather.time}</Subheading>
                <Text>{weather.temperature}</Text>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      </View>
    </>
  );

  return (
    <>
      <TopAppBar navigation={navigation} title="Clima" />
      <FlatList
        ListHeaderComponent={renderHeader}
        data={weeklyForecast}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.day}
            description={item.description}
            left={(props) => <List.Icon {...props} icon={item.icon} />}
            style={styles.listItem}
          />
        )}
        style={styles.container}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginVertical: 8,
  },
  title: {
    marginLeft: 16,
    marginVertical: 8,
  },
  currentWeatherCard: {
    marginHorizontal: 16,
    elevation: 1,
  },
  hourlyForecast: {
    paddingHorizontal: 16,
  },
  weatherCard: {
    width: 100,
    marginRight: 8,
    elevation: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
    marginHorizontal: 2,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
});
