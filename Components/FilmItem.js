import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const FilmItem = (props) => {
  return (
    <View style={styles.main_container}>
      <Image style={styles.image} source={require("../assets/splash.png")} />
      <View style={styles.container_contenu}>
        <View style={styles.container_enTete}>
          <Text style={styles.titre}>{props.film.title}</Text>
          <Text style={styles.vote}>{props.film.vote_average}</Text>
        </View>
        <View style={styles.container_description}>
          <Text style={styles.description} numberOfLines={6}>{props.film.overview}</Text>
        </View>
        <View style={styles.container_footer}>
          <Text style={styles.date}>{props.film.release_date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: "row",
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  container_contenu: {
    flex: 1,
    margin: 5,
  },
  container_enTete: {
    flex: 3,
    flexDirection: "row",
  },
  titre: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666',
    marginRight: 5,
  },
  container_description: {
    flex: 7
  },
  description: {
    fontStyle: 'italic',
    color: '#666666'
  },
  container_footer: {
    flex: 1,
  },
  date: {
    textAlign: "right",
    fontSize: 14,
  },
});

export default FilmItem;
