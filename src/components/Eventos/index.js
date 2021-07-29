import { createStackNavigator } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";
import React from "react";
import { List } from "./List";

const HomeStack = createStackNavigator();

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Eventos" component={List} />
      <HomeStack.Screen name="Detalles" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
