/* eslint-disable import/no-anonymous-default-export */
const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = "https://api.themoviedb.org/3/"

const fetchMovies = async (endpoint) => {
  return await fetch(
    `${API_URL}${endpoint}?language=fr-FR&api_key=${API_KEY}`
  ).then((response) => response.json())
}

export default {
  getHomeMovies: async () => {
    return [
      {
        slug: "top-rated",
        title: "Mieux notés",
        items: await fetchMovies("movie/top_rated"),
      },
      {
        slug: "trend-allweek",
        title: "Tendance",
        items: await fetchMovies("trending/all/week"),
      },
      {
        slug: "action",
        title: "Action",
        items: await fetchMovies("discover/movie?with_genres=28"),
      },
      {
        slug: "upcoming",
        title: "Prochaines sorties",
        items: await fetchMovies("movie/upcoming"),
      },
      {
        slug: "nowplaying",
        title: "Au cinéma",
        items: await fetchMovies("movie/now_playing"),
      },
      {
        slug: "tvpopular",
        title: "Séries populaires",
        items: await fetchMovies("tv/popular"),
      },
      {
        slug: "ontheair",
        title: "A l'écran",
        items: await fetchMovies("tv/on_the_air"),
      },
      {
        slug: "popular-tv",
        title: "Séries populaires Netflix",
        items: await fetchMovies("discover/tv?with_type=2"),
      },
    ]
  },
}
