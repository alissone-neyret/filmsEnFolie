import { API_TOKEN } from "../config"


export const recupereFilmsDepuisApiAvecTexteDeRecherche = (texte) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&query=${texte}`

    return fetch(url)
            .then((response) => response.json())
            .catch((error) => console.error(error))
}