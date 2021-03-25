import { tmdb } from 'api'
import { useFetchData, STATUS } from 'hooks'
import { Effects, YoutubePlayer } from 'components'
import {
  container,
  videoTrailer,
  poster,
  headline,
  title,
  tagline,
  overview,
} from './Movie.module.scss'
import { useReducer } from 'react'

/* -------------------------------------------------------------------------- */

const initialBookmark = [];

function bookmarkReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.payload]
    case 'READ':
      return state.find(({id}) => id === action.payload)
    case 'UPDATE':
      return action.payload
    case 'DELETE':
      return action.payload
    default:
      return state
  }
}



const { idle, pending, rejected, resolved } = STATUS

export default function MovieDetailPage({ match }) {
  useReducer(bookmarkReducer, initialBookmark);
  const movieId = match.params.id;
  const [status, error, json] = useFetchData(tmdb.getDetail(movieId))

  if (status === idle) {
    return null
  }

  if (status === pending) {
    return <Effects message="로딩중" />
  }

  if (status === rejected) {
    return <div role="alert">{error.message}</div>
  }

  if (status === resolved) {
    // 무비 정보
    // console.log(json)

    // backdrop_path
    // poster_path
    // genres
    // homepage
    // title
    // tagline
    // overview
    // videos.results[1].key

    return json ? (
      <div className="movie-page">
        <div className={container}>
          <a href={json.homepage} target="_blank" rel="noreferrer noopener">
            <img
              className={poster}
              src={tmdb.getImageURL(json.poster_path, 200)}
              alt={json.title}
            />
          </a>
          <div className={headline}>
            <h2 class={title}>{json.title}</h2>
            <p className={tagline}>{json.tagline}</p>
          </div>
          <p className={overview}>{json.overview}</p>
        </div>
        <div className={videoTrailer}>
          {json.videos.results[1] && (
            <YoutubePlayer videoId={json.videos.results[1].key} />
          )}
        </div>
      </div>
    ) : null
  }
}
