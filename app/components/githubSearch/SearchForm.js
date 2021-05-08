import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import useSearch from "../../hooks/useSearch";

export default function SearchForm(props) {
  const {
    setRegisters,
    setIsLoading,
    setRegistersSelected,
    setReloadCheckbox,
  } = props;
  const [queryInput, setQueryInput] = useState("");

  const pageNumber = "1";
  const limitPage = "3";

  //obtaining search result
  const { searchResult } = useSearch(
    queryInput,
    pageNumber,
    limitPage,
    setIsLoading
  );

  //reinicializar el valor de los checkbox cuando se haga una nueva consulta
  useEffect(() => {
    setReloadCheckbox(true);
  }, [queryInput]);

  //reiniciar valor de registros seleccionados
  useEffect(() => {
    setRegistersSelected([]);
  }, [queryInput]);

  //reiniciar valor de numero de estrellas de los repositorios

  //actualizar loading
  useEffect(() => {
    if (queryInput) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [queryInput]);

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
