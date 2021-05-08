import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import useSearch from "../../hooks/useSearch";

export default function SearchForm(props) {
  const { setRegisters, setIsLoading } = props;
  const [queryInput, setQueryInput] = useState("");

  const pageNumber = "1";
  const limitPage = "2";

  //obtaining search result
  const { searchResult, isLoading } = useSearch(
    queryInput,
    pageNumber,
    limitPage
  );

  //actualizar loading
  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  //actualizar registros
  useEffect(() => {
    setRegisters(searchResult);
  }, [searchResult]);

  return (
    <View>
      <TextInput
        value={queryInput}
        style={styles.input}
        onChangeText={(e) => setQueryInput(e)}
        placeholder="Buscar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    alignSelf: "center",
    height: 45,
    width: 250,
    padding: 10,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#00a680",
    backgroundColor: "#efefef",
  },
});
