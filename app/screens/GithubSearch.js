import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import SearchForm from "../components/githubSearch/SearchForm";
import ListRepositories from "../components/githubSearch/ListRepositories";

export default function GithubSearch(params) {
  const [registers, setRegisters] = useState(null);

  registers && console.log("principal: ", registers);
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Github Search</Text>

      {/* <Button title="Search" /> */}
      <SearchForm setRegisters={setRegisters} />
      <ListRepositories />
      {/* <Text>{registers}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  text: {
    marginTop: 70,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
});
