import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";

export default function Repositories(props) {
  return (
    <View>
      <Text>Lista de repositorios...</Text>
      <Avatar
        rounded
        source={{
          uri:
            "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        }}
      />
    </View>
  );
}
