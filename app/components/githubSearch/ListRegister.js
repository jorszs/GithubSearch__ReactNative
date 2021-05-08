import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Card, Avatar, Image } from "react-native-elements";
import { StarOutlined } from "@ant-design/icons";
import Loading from "../Loading";

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

export default function ListRegister(props) {
  const users = [
    {
      name: "brynn",
      avatar:
        "https://avatars.githubusercontent.com/u/37056048?s=400&u=8bff5282c8cd4fb381a18f95a2afb5937564c91f&v=4",
    },
    {
      name: "brynn",
      avatar:
        "https://avatars.githubusercontent.com/u/37056048?s=400&u=8bff5282c8cd4fb381a18f95a2afb5937564c91f&v=4",
    },
    {
      name: "brynn",
      avatar:
        "https://avatars.githubusercontent.com/u/37056048?s=400&u=8bff5282c8cd4fb381a18f95a2afb5937564c91f&v=4",
    },
    {
      name: "brynn",
      avatar:
        "https://avatars.githubusercontent.com/u/37056048?s=400&u=8bff5282c8cd4fb381a18f95a2afb5937564c91f&v=4",
    },
    {
      name: "brynn",
      avatar:
        "https://avatars.githubusercontent.com/u/37056048?s=400&u=8bff5282c8cd4fb381a18f95a2afb5937564c91f&v=4",
    },
    {
      name: "brynn",
      avatar:
        "https://avatars.githubusercontent.com/u/37056048?s=400&u=8bff5282c8cd4fb381a18f95a2afb5937564c91f&v=4",
    },
  ];

  const { registers, isLoading, isSearchQuery } = props;

  useEffect(() => {
    registers.length > 0 &&
      registers.sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [registers]);

  registers && console.log("list...", registers);
  return (
    <View style={styles.view}>
      <Text>Lista de repositorios...</Text>
      {/* indicador de cargando los repositorios... */}
      {/* <Loading isVisible={true} /> */}
      {!isLoading ? (
        <ViewRegisters registers={registers} />
      ) : (
        <Loading isVisible={true} />
      )}
    </View>
  );
}

function ViewRegisters(props) {
  const { registers } = props;
  return (
    <View>
      <Text>listando registros</Text>
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
          <Text>{register.repository_name}</Text>
          <Text>Stars {register.stars}</Text>
        </View>
      </View>
      {/* <Card style={styles.card}>
      </Card> */}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: ScreenHeight * 0.5,
    width: ScreenWidth,
    // borderWidth: 5,
    borderColor: "#efefef",
    // flexDirection: "row",
  },
  card: {
    padding: 0,
    display: "flex",
    // justifyContent: "space-between",
    width: ScreenWidth,
  },
  cardContent: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 2,
    margin: 0,
    flexDirection: "row",
    borderTopWidth: 2,
    borderTopColor: "#efefef",
  },
  user: {
    width: ScreenWidth,
  },
  avatar: {
    marginRight: 20,
  },
  details: {
    marginLeft: 20,
  },
  name: {
    fontWeight: "bold",
  },
});
