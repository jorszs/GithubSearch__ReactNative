import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  CheckBox,
} from "react-native";
import { Card, Avatar, Image } from "react-native-elements";
import { StarOutlined } from "@ant-design/icons";
import Loading from "../Loading";

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
let isRegisterSelected = false;

export default function ListRegister(props) {
  const {
    registers,
    isLoading,
    registersSelected,
    setRegistersSelected,
    reloadCheckbox,
    setReloadCheckbox,
  } = props;

  useEffect(() => {
    isRegisterSelected = true;
  }, [registersSelected]);

  useEffect(() => {
    registers.length > 0 &&
      registers.sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [registers]);

  return (
    <View style={styles.view}>
      {!isLoading ? (
        <ViewRegisters
          registers={registers}
          setRegistersSelected={setRegistersSelected}
          reloadCheckbox={reloadCheckbox}
          setReloadCheckbox={setReloadCheckbox}
          registersSelected={registersSelected}
        />
      ) : (
        <Loading isVisible={true} />
      )}
    </View>
  );
}

function ViewRegisters(props) {
  const {
    registers,
    setRegistersSelected,
    reloadCheckbox,
    setReloadCheckbox,
    registersSelected,
  } = props;
  return (
    <View>
      <ScrollView>
        {registers.map((register, index) => (
          <CardRegister
            register={register}
            key={index}
            setRegistersSelected={setRegistersSelected}
            reloadCheckbox={reloadCheckbox}
            setReloadCheckbox={setReloadCheckbox}
            registersSelected={registersSelected}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function CardRegister(props) {
  const {
    register,
    setRegistersSelected,
    reloadCheckbox,
    setReloadCheckbox,
    registersSelected,
  } = props;
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    reloadCheckbox && setIsSelected(false);
    setReloadCheckbox(false);
  }, [reloadCheckbox]);
  const selectedHandler = async () => {
    await setIsSelected((prev) => !prev);
    if (!isSelected) {
      setRegistersSelected((prev) => [...prev, register]);
    } else {
      const newArray = registersSelected.filter((e) => e !== register);
      setRegistersSelected(newArray);
    }
  };

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
          <Text style={styles.repository_name}>{register.repository_name}</Text>
          <View>
            <Text style={styles.stars}>Estrellas: {register.stars}</Text>
          </View>
        </View>
      </View>
      <CheckBox
        value={isSelected}
        onValueChange={selectedHandler}
        style={styles.checkbox}
      />
      {/* <Card style={styles.card}>
      </Card> */}
    </View>
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
    height: isRegisterSelected ? ScreenHeight * 0.45 : ScreenHeight * 0.5,
    width: ScreenWidth,
    borderColor: "#efefef",
    backgroundColor: "#efefef",
    marginBottom: 15,
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
