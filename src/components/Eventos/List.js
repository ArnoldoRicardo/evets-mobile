import React from "react";
import { Button, Text, View, FlatList, Image, StyleSheet } from "react-native";

export const List = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {
            key: "1",
            name: "Concierto orquesta sinfonica",
            descripcion:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
            direccion: "hola",
          },
          {
            key: "2",
            name: "Concierto orquesta sinfonica",
            descripcion:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
            direccion: "hola",
          },
          {
            key: "3",
            name: "Concierto orquesta sinfonica",
            descripcion:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
            direccion: "hola",
          },
        ]}
        renderItem={({ item }) => (
          <Item titulo={item.name} descripcion={item.descripcion} />
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export const Item = ({ titulo, descripcion, photo }) => {
  return (
    <View style={styles.elemento}>
      <Image
        style={styles.photo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <View style={styles.textos}>
        <Text style={styles.titles}>{titulo}</Text>
        <Text>{descripcion}</Text>
        <View style={styles.buttons}>
          <Button style={styles.button} title="Agendar" />
          <Button style={styles.button} title="Direccion" color="#841584" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 1,
  },
  buttons: {
    flexDirection: "row-reverse",
  },
  titles: {
    fontWeight: "bold",
  },
  textos: {
    flexDirection: "column",
    margin: 3,
    width: "70%",
  },
  elemento: {
    backgroundColor: "#eee",
    flexDirection: "row",
    margin: 2,
  },
  photo: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: "100%",
  },
});
