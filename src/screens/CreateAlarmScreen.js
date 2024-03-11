import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, TextInput, Button, Menu } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

const CreateAlarmScreen = ({ navigation }) => {
  const [alarmName, setAlarmName] = useState("");
  const [client, setClient] = useState("");
  const [location, setLocation] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [reminder, setReminder] = useState("1");
  const [reminderUnit, setReminderUnit] = useState("día");

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const navigateToMap = () => {
    navigation.navigate("Map");
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInput
          label="Fecha"
          value={date.toLocaleDateString()}
          editable={false}
          style={styles.input}
        />
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode={"date"}
          display="default"
          onChange={onChangeDate}
        />
      )}

      <TouchableOpacity onPress={() => setShowTimePicker(true)}>
        <TextInput
          label="Hora"
          value={time.toLocaleTimeString()}
          editable={false}
          style={styles.input}
        />
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode={"time"}
          is24Hour={true}
          display="default"
          onChange={onChangeTime}
        />
      )}

      <TextInput
        label="Nombre alarma"
        value={alarmName}
        onChangeText={setAlarmName}
        style={styles.input}
      />
      <TextInput
        label="Cliente"
        value={client}
        onChangeText={setClient}
        style={styles.input}
      />
      <Text style={styles.label}>Recordatorio</Text>
      <View style={styles.inputGroup}>
        <TextInput
          label=""
          value={reminder}
          onChangeText={setReminder}
          style={styles.reminderInput}
          keyboardType="numeric"
        />
        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          anchor={
            <Button onPress={openMenu} style={styles.menuButton}>
              {reminderUnit}
            </Button>
          }
        >
          <Menu.Item
            onPress={() => {
              setReminderUnit("minuto");
              closeMenu();
            }}
            title="minuto"
          />
          <Menu.Item
            onPress={() => {
              setReminderUnit("hora");
              closeMenu();
            }}
            title="hora"
          />
          <Menu.Item
            onPress={() => {
              setReminderUnit("día");
              closeMenu();
            }}
            title="día"
          />
        </Menu>
        <Text>antes</Text>
      </View>
      <TouchableOpacity onPress={navigateToMap}>
        <TextInput
          label="Ubicación"
          value={location}
          onChangeText={setLocation}
          editable={false}
          style={styles.input}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  reminderInput: {
    flex: 0,
    marginRight: 8,
    minWidth: 80,
  },
  menuButton: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    flex: 0,
    marginRight: 8,
  },
  label: {
    marginVertical: 4,
  },
  input: {
    marginBottom: 10,
    flex: 1,
  },
});

export default CreateAlarmScreen;
