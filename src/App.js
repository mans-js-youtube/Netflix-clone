import { useEffect, useState } from "react"
import ApiMovie from "./ApiMovie"
import "./App.css"
import MovieSection from "./components/MovieSection"

function App() {
  const [moviesList, setMoviesList] = useState([])

  useEffect(() => {
    const loadAllMovies = async () => {
      let list = await ApiMovie.getHomeMovies()
      console.log(list)
      setMoviesList(list)
    }

    loadAllMovies()
  }, [])

  return (
    <div className="page">
      <section className="lists">
        {moviesList.map((item, key) => (
          <MovieSection key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}

export default App
