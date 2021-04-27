import { API_TOKEN } from "../config"


export const recupereFilmsDepuisApiAvecTexteDeRecherche = (texte) => {
    console.log("texte", texte)
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${texte}&include_adult=false`;

    return fetch(url)
            .then((response) => response.json())
            .catch((error) => console.error(error))
}

export const recupereImageDepuisApi = (nom) => {
    return `https://image.tmdb.org/t/p/w300${nom}`;
}