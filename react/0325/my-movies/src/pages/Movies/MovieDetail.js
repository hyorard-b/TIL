import React from 'react'
import { tmdb } from 'api'
import { useFetchData, STATUS } from 'hooks'
import { Effects, YoutubePlayer } from 'components'
import { Helmet } from 'react-helmet-async'
import {
  container,
  videoTrailer,
  poster,
  headline,
  title,
  tagline,
  overview,
} from './MovieDetail.module.scss'

/* -------------------------------------------------------------------------- *
 * 리듀서 훅 활용 편
 * -------------------------------------------------------------------------- *
 * const [state, dispatch] = React.useReducer(reducer, intialArg, init?)
 * 사용자가 dispatch() 실행할 때 전달하는 액션(JS 객체 { type, payload?, .. })
 */

/* -------------------------------------------------------------------------- */

// 북마크 초깃값
// [
//   {id: '', title: '', tagline: '', overview: '', poster: '', ... }
// ]
const initialBookmark = []

// 북마크 리듀서 (순수) 함수
// state, action
function bookmarkReducer(state, action /* { type } */) {
  // 북마크 리듀서가 하는 일??
  // 쓰기(create), 수정(update), 제거(delete)
  switch (action.type) {
    case 'create':
      return [...state, action.payload /* { bookmark object } */]
    case 'update':
      return state.map((bookmark) => {
        return bookmark.id === action.payload.id
          ? action.payload /* { bookmark object } */
          : bookmark
      })
    case 'delete':
      return state.filter(({ id }) => id !== action.payload /* id */)
    // 북마크 리듀서에서 상태를 다른 유형으로 변형을 가하면 안되므로 읽기(read)는 제외 합니다.
    // return state.find(({ id }) => id === action.payload /* id */)
    // 읽기를 시도할 경우, 현재 상태를 반환하도록 설정합니다.
    // 읽기 id
    case 'read':
    default:
      return state
  }
}

// 사용자가 좋아요(❤️) 버튼을 누르면 `쓰기(create)`를 요청(알림)
// dispatch({type: create, payload: newBookmark})
// dispatch({type: 'read', payload: newBookmark.id})

/* -------------------------------------------------------------------------- */

const { idle, pending, rejected, resolved } = STATUS

export default function MovieDetailPage({ match }) {
  React.useReducer(bookmarkReducer, initialBookmark)

  // props → ID: 596247, 527774, 464052, 399566
  const [status, error, json] = useFetchData(tmdb.getDetail(match.params.id))

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

    return !json ? (
      <Effects message="로딩중" />
    ) : (
      <div className="movie-page">
        <Helmet>
          <title>"{json.title}" 영화 안내 ← "나의 영화" 서비스</title>
        </Helmet>
        <div className={container}>
          <a href={json.homepage} target="_blank" rel="noreferrer noopener">
            <img
              className={poster}
              src={tmdb.getImageURL(json.poster_path, 200)}
              alt={json.title}
              height={480}
            />
          </a>
          <div className={headline}>
            <h2 className={title}>{json.title}</h2>
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
    )
  }
}
