import { useState, useEffect } from 'react'
import styles from "./App.module.scss"
import { Routes, Route, Link } from "react-router-dom"
import Title from "./components/Title"
import MovieList from "./components/MovieList"
import TodosContainer from "./components/Todos/container"

export default function App() {
  //js
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json")
      //fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.data.movies)
      })
  }, [])

  console.log(movies)

  //XML
  return (
    <div className={styles.App}>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          {/* 1. Link를 통해, 누르면 to의 값을 router의 path로 전달한다. react-router-dom를 쓰는 XML의 <Link to="">는 HTML의 <A href="">와 같다. */}
          <Link to="/movies">무비</Link>
        </li>
        <li>
          <Link to="/todos">투두</Link>
        </li>
      </ul>
      <hr />{" "}
      {/* 2. Route를 통해, 각 Link를 통해 받아온 path에 컴포넌트를 연결한다. 모든 Route들은 Routes 컴포넌트 안에 넣어야 한다. */}
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/movies" element={<MovieList movies={movies} />} />
        <Route
          path="/todos"
          element={
            <>
              <TodosContainer />
            </>
          }
        />
      </Routes>
    </div>
  )
}
