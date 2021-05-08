import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import GithubSearch from "./app/screens/GithubSearch";

export default function App() {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      {/* <Text>Github Search Project!</Text> */}
      <GithubSearch />
      <StatusBar style="auto" />
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
