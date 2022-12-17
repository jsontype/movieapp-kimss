import styles from "./style.module.scss"

type MovieListItemProps = {
  rating: number
  genres: string[]
  id: number
  title: string
  year: string
  url: string
  large_cover_image: string
}

type MovieListProps = {
  movies: MovieListItemProps[]
}

export default function MovieList({ movies }: MovieListProps) {
  const render = movies.map((item) => {
    //JS
    const movieRankClass =
      item.rating >= 8 ? "good" : item.rating >= 6 ? "soso" : "bad"
    const hotIcon = item.rating >= 9 && "🔥"
    const itemRating = item.rating || "평점없음"
    const genres = item.genres.join(", ")

    //XML
    return (
      <div key={item.id}>
        <a className={styles.movieTitle} href={item.url}>
          {hotIcon}
          {item.title} ({item.year})
        </a>
        <div>
          평점 : <span className={styles[movieRankClass]}>{itemRating}</span>{" "}
          /10점
        </div>
        <div>
          장르 : <span>{genres}</span>
        </div>
        <img
          className={styles.movieImage}
          src={item.large_cover_image}
          alt={item.title}
        ></img>
      </div>
    )
  })

  return <>{render}</>
}
