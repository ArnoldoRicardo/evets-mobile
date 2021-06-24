import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

export const Item = ({ titulo, descripcion, photo }) => {
  return (
    <View style={styles.elemento}>
      <Image
        style={styles.photo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Text>{titulo}</Text>
    </View>
  );
};

export default () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "1", name: "pablo" },
          { key: "1", name: "pablo" },
          { key: "1", name: "pablo" },
        ]}
        renderItem={({ item }) => <Item titulo={item.name} />}
        keyExtractor={item => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  elemento: {
    backgroundColor: "#eee",
    flexDirection: "row",
    margin: 2,
  },
  photo: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: "100%",
  },
});
