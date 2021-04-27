import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import FilmItem from "./FilmItem";
import { recupereFilmsDepuisApiAvecTexteDeRecherche } from "../API/TMDBApi";

const Recherche = () => {
  const [films, setFilms] = useState([]);
  const [texteRecherche, setTexteRecherche] = useState("");
  const [enChargement, setEnChargement] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const rechercheFilm = () => {
    setPage(0);
    setTotalPages(0);

    if (texteRecherche.length > 0) {
      setEnChargement(true);
      recupereFilmsDepuisApiAvecTexteDeRecherche(texteRecherche).then(
        (data) => {
          setPage(data.page);
          console.log("page requete", page);

          setTotalPages(data.total_pages);
          console.log("total page requete", totalPages);

          // const totalFilms = [...films, ...data.results];
          setFilms(data.results);
          return setEnChargement(false);
        }
      );
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        placeholder="Titre du film"
        onChangeText={(texte) => setTexteRecherche(texte)}
        onSubmitEditing={() => rechercheFilm()}
      />
      <Button title="Rechercher" onPress={() => rechercheFilm()} />
      <FlatList
        data={films}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        renderItem={({ item }) => <FilmItem film={item} />}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (page < totalPages) {
            rechercheFilm();
          }
        }}
      />
      <Text>{page}</Text>
      {enChargement && (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
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
