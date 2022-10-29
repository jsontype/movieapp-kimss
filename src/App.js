import React, { useState, useEffect } from 'react'
import './App.css'
import Title from './components/Title'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then((res) => { return res.json() })
      .then((json) => { setMovies(json.data.movies) })
  }, [])

  console.log('movies: ', movies)
  
  const render = movies.map((item) => {
    const hotIcon = item.rating >= 8 && '🔥'
    return (
      <div className='movie' key={item.id}>
        <a className='movieTitle' href={item.url}>{item.title}</a>
        <div>평점 : <span>{hotIcon}{item.rating}</span></div>
        <img className='movieImage' src={item.large_cover_image} alt={item.title}></img>
        <div className='movieYear'>{item.year}</div>
      </div>
    )
  })

  return (
    <div className="App">
      <Title />
      {render}
    </div>
  )
}

export default App
