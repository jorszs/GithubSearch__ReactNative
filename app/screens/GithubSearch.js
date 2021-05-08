import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import SearchForm from "../components/githubSearch/SearchForm";
import ListRepositories from "../components/githubSearch/ListRegister";

export default function GithubSearch(props) {
  const { navigation } = props;
  const [registers, setRegisters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [registersSelected, setRegistersSelected] = useState([]);
  const [reloadCheckbox, setReloadCheckbox] = useState(false);
  const [starsCount, setStarsCount] = useState(0);

  useEffect(() => {
    setIsLoading(false);
  }, [registers]);
  //Contar estrellas de registros seleccionados
  useEffect(() => {
    console.log(registersSelected);
    let newStars = 0;
    registersSelected.map((e) => {
      newStars = newStars + e.stars;
    });
    setStarsCount(newStars);
  }, [registersSelected]);

  //Eliminar registros de la lista actual
  const deleteRegisters = () => {
    const newArray = registers.filter(
      (e) => registersSelected.indexOf(e) == -1
    );

    setRegisters(newArray);
    setReloadCheckbox(true);
    setRegistersSelected([]);
  };

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Github Search</Text>

      <SearchForm
        setRegisters={setRegisters}
        setIsLoading={setIsLoading}
        setRegistersSelected={setRegistersSelected}
        setReloadCheckbox={setReloadCheckbox}
      />
      <ListRepositories
        registers={registers}
        isLoading={isLoading}
        registersSelected={registersSelected}
        setRegistersSelected={setRegistersSelected}
        reloadCheckbox={reloadCheckbox}
        setReloadCheckbox={setReloadCheckbox}
      />
      {registersSelected.length > 0 && (
        <>
          <Text style={styles.stars}>Estrellas: {starsCount}</Text>
          <View style={styles.button}>
            <Button
              color="#c81d11"
              title="Eliminar"
              onPress={deleteRegisters}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Ver seleccionados"
              onPress={() =>
                navigation.navigate("RegistersSelected", { registersSelected })
              }
            ></Button>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  text: {
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  stars: {
    textAlign: "center",
    marginBottom: 8,
  },
  button: {
    height: 40,
    marginTop: 2,
    paddingLeft: 5,
    paddingRight: 5,
    textTransform: "lowercase",
  },
});
