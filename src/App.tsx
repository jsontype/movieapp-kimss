import { useState, useEffect } from 'react'
import styles from "./App.module.scss";
import Title from "./components/Title";
import MovieList from "./components/MovieList";

export default function App() {
  //js
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json")
      //fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.data.movies);
      });
  }, []);

  console.log(movies);

  //XML
  return (
    <div className={styles.App}>
      <Title />
      <MovieList movies={movies} />
    </div>
  );
}
