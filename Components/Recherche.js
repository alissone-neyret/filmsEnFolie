import React from "react";
import { StyleSheet, View, TextInput, Button, FlatList, Text } from "react-native";
import films from '../Helpers/filmsData';
import FilmItem from "./FilmItem";

const Recherche = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textinput} placeholder="Titre du film" />
      <Button title="Rechercher" onPress={() => {}} />
      <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem/>}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
});

export default Recherche;
