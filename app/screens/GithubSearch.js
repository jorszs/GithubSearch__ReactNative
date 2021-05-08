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

  //Contar estrellas de registros seleccionados
  useEffect(() => {
    registersSelected.map((e) => {
      console.log(typeof e.stars);
      setStarsCount((prev) => prev + e.stars);
    });
  }, [registersSelected]);

  //Eliminar registros de la lista actual
  const deleteRegisters = async () => {
    const newRegisters = await registers.filter(
      (e) => registersSelected.indexOf(e) == -1
    );

    setRegisters(newRegisters);
    setReloadCheckbox(true);
  };

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Github Search</Text>

      <SearchForm
        setRegisters={setRegisters}
        setIsLoading={setIsLoading}
        setRegistersSelected={setRegistersSelected}
        setReloadCheckbox={setReloadCheckbox}
        setStarsCount={setStarsCount}
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
              onPress={() => deleteRegisters()}
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
