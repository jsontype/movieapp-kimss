import React from 'react'
import './style.css'

export default function MovieList({movies}) {
  const render = movies.map(item => {
    //JS
    const movieRankClass = item.rating >= 8 ? 'good' :item.rating >=6 ? 'soso' : 'bad'
    const hotIcon = item.rating >= 9 && '🔥'
    const itemRating = item.rating || '평점없음'

    //XML  
    return (
      <div key={item.id}>
        <a className='movieTitle' href={item.url}>{hotIcon}{item.title}</a>
        <div>평점 : <span className={movieRankClass}>{itemRating}</span> /10점</div>
        <img className='movieImage'src={item.large_cover_image} alt={item.title}></img>
      </div>
    )
  })

  return (
    <>
      {render}
    </>
  )
}
