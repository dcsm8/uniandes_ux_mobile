import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { List, IconButton, Appbar } from "react-native-paper";
import TopAppBar from "../components/TopAppBar";

export default function BlueGoldenHourScreen({ navigation }) {
  return (
    <>
      <TopAppBar navigation={navigation} title="Hora azul/dorada" />
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
          <List.Item
            title="Hora azul - mañana"
            description="5:00 AM - 6:00 AM"
            style={styles.listItem}
          />
          <List.Item
            title="Hora dorada - mañana"
            description="6:00 AM - 7:00 AM"
            style={styles.listItem}
          />
          <List.Item
            title="Hora dorada - noche"
            description="6:00 PM - 7:00 PM"
            style={styles.listItem}
          />
          <List.Item
            title="Hora azul - noche"
            description="7:00 PM - 8:00 PM"
            style={styles.listItem}
          />
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
