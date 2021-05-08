import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import SearchForm from "../components/githubSearch/SearchForm";
import ListRepositories from "../components/githubSearch/ListRegister";

export default function GithubSearch(params) {
  const [registers, setRegisters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  registers.length > 0 && console.log("principal: ", registers);
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Github Search</Text>

      {/* <Button title="Search" /> */}
      <SearchForm setRegisters={setRegisters} setIsLoading={setIsLoading} />
      <ListRepositories registers={registers} isLoading={isLoading} />
      {/* <Text>{registers}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  text: {
    alignSelf: "center",
    marginTop: 70,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
});
