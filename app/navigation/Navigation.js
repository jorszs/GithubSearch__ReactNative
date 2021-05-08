import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GithubSearch from "../screens/GithubSearch";
import RegistersSelected from "../screens/RegistersSelected";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={GithubSearch}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="RegistersSelected" component={RegistersSelected} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
