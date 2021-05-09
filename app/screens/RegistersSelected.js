import React, { useState, useEffect } from "react";
import { Linking } from "react-native";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import * as Animatable from "react-native-animatable";

import { Avatar } from "react-native-elements";

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

export default function RegistersSelected({ navigation, route }) {
  const { registersSelected } = route.params;
  // console.log(route.params.registersSelected);
  // useEffect(() => {
  //   console.log("seleccionados...", registersSelected);
  // }, [registersSelected]);

  return (
    <View style={styles.registersSelected}>
      <Text style={styles.header}>Registros</Text>
      <View style={styles.view}>
        <ViewRegisters registers={registersSelected} />
      </View>
    </View>
  );
}

function ViewRegisters(props) {
  const { registers } = props;
  return (
    <View>
      <ScrollView>
        {registers.map((register, index) => (
          <CardRegister register={register} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

function CardRegister(props) {
  const { register } = props;
  return (
    <Animatable.View animation="fadeInUp">
      <TouchableHighlight onPress={() => Linking.openURL(register.github_url)}>
        <View style={styles.register}>
          <View style={styles.cardContent}>
            <Avatar
              size="medium"
              rounded
              source={{
                uri: register.avatar,
              }}
            />
            <View style={styles.details}>
              <Text style={styles.name}>{register.owner}</Text>
              <Text style={styles.repository_name}>
                {register.repository_name}
              </Text>
              <View>
                <Text style={styles.stars}>Estrellas: {register.stars}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#324053",
  },
  registersSelected: {
    marginTop: 20,
  },
  view: {
    height: ScreenHeight * 0.72,
    width: ScreenWidth,
    borderColor: "#efefef",
    backgroundColor: "#efefef",
  },
  register: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 2,
    borderTopColor: "#efefef",
    backgroundColor: "#fff",
  },
  card: {
    padding: 0,
    display: "flex",
    width: ScreenWidth,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 2,
    margin: 0,
  },
  user: {
    width: ScreenWidth,
  },
  avatar: {
    marginRight: 20,
  },
  details: {
    width: 200,
    marginLeft: 30,
    overflow: "hidden",
  },
  name: {
    fontWeight: "bold",
    marginBottom: 4,
    color: "#324053",
  },
  repository_name: {
    color: "#858E97",
    marginBottom: 3,
  },
  stars: {
    color: "#858E97",
  },
  checkbox: {
    justifyContent: "flex-end",
    marginRight: 20,
  },
});
