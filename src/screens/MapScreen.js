import React from "react";
import { Image, StyleSheet, View } from "react-native";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/map.png")}
        style={styles.mapImage}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});

export default MapScreen;
