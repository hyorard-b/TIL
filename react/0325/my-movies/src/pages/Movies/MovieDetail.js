import React, { useEffect, useState } from 'react'
import { tmdb } from 'api'
import { useFetchData, STATUS } from 'hooks'
import { Effects, YoutubePlayer, BookmarkButton } from 'components'
import { Helmet } from 'react-helmet-async'
import { useBookmarkList, useBookmarkDispatch, createBookmark, deleteBookmark } from 'hooks/useBookmarks';
import {
  container,
  videoTrailer,
  poster,
  headline,
  title,
  tagline,
  overview,
  button,
} from './MovieDetail.module.scss';


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


// 사용자가 좋아요(❤️) 버튼을 누르면 `쓰기(create)`를 요청(알림)
// dispatch({type: create, payload: newBookmark})
// dispatch({type: 'read', payload: newBookmark.id})

/* -------------------------------------------------------------------------- */

const { idle, pending, rejected, resolved } = STATUS

export default function MovieDetailPage({ match }) {
  const details = useBookmarkList();
  const dispatch = useBookmarkDispatch();
  const [checkBookmark, setCheckBookmark] = useState(() => {
    const isMarked = details.filter(({ id }) => match.params.id === id).length > 0;

    return isMarked;
  });
  // props → ID: 596247, 527774, 464052, 399566
  const [status, error, json] = useFetchData(tmdb.getDetail(match.params.id));


  useEffect(() => {
    console.log(details);
  }, [checkBookmark, details]);

  const handleClick = () => {
    setCheckBookmark(!checkBookmark);
    
    dispatch(!checkBookmark ? createBookmark(json) : deleteBookmark(json));
  }

  
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
              <BookmarkButton
                label="북마크"
                isActive={checkBookmark}
                // disabled={checkBookmark}
                onClick={handleClick}
                className={button}
                iconProps={{ size: '2x' }}
                id={json.id}
              />
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
