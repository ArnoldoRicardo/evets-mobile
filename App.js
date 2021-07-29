// delete for production
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeStackScreen from "./src/components/Calendario";
import SettingsStackScreen from "./src/components/Talleres";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Calendario") {
              return (
                <MaterialIcons
                  name="event-available"
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Talleres") {
              return (
                <MaterialIcons name="group-work" size={size} color={color} />
              );
            } else if (route.name === "Expociciones") {
              return (
                <FontAwesome name="paint-brush" size={size} color={color} />
              );
            } else if (route.name === "Resintos") {
              return (
                <MaterialCommunityIcons
                  name="google-maps"
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Rutas") {
              return (
                <MaterialIcons name="add-road" size={size} color={color} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Calendario" component={HomeStackScreen} />
        <Tab.Screen name="Talleres" component={SettingsStackScreen} />
        <Tab.Screen name="Expociciones" component={SettingsStackScreen} />
        <Tab.Screen name="Resintos" component={SettingsStackScreen} />
        <Tab.Screen name="Rutas" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
