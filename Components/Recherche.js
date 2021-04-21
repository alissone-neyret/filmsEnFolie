import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  Text,
} from "react-native";
// import films from "../Helpers/filmsData";
import FilmItem from "./FilmItem";
import { recupereFilmsDepuisApiAvecTexteDeRecherche } from "../API/TMDBApi";

const Recherche = () => {
  const [films, setFilms] = useState([]);
  const [texteRecherche, setTexteRecherche] = useState("");

  const rechercheFilm = () => {
    console.log("texte recherche", texteRecherche);

    if (texteRecherche.length > 0) {
      recupereFilmsDepuisApiAvecTexteDeRecherche("start").then((data) => {
        console.log(data);
        return setFilms(data.results);
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        placeholder="Titre du film"
        onChangeText={(texte) => setTexteRecherche(texte)}
      />
      <Button title="Rechercher" onPress={() => rechercheFilm()} />
      <FlatList
        data={films}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <FilmItem film={item} />}
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
