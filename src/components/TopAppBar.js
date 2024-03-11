import React, { useContext } from "react";
import { Appbar } from "react-native-paper";
import { useTheme } from "react-native-paper";

export default function TopAppBar({ navigation, title }) {
  const theme = useTheme();

  return (
    <Appbar.Header
      style={{
        backgroundColor: theme.colors.primary,
      }}
    >
      <Appbar.Action
        icon="menu"
        onPress={() => navigation.openDrawer()}
        color={theme.colors.onPrimary}
      />
      <Appbar.Content
        title={title}
        titleStyle={{
          color: "white",
          fontWeight: "bold",
        }}
      />
    </Appbar.Header>
  );
}
