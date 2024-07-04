import { useState } from "react";
import React from "react";
import { Text, View, Switch, StyleSheet, StatusBar } from "react-native";
import { ThemeContext } from "@/assets/context/ThemeContext";
import { myColors } from "@/assets/styles/Colors";
import MyKeyboard from "@/components/MyKeyboard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: '#000' }]}
      >
        <StatusBar/>
        <Switch
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <MyKeyboard/>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor : myColors.light,
  }
});
