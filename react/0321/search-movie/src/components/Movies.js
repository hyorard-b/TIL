import React, { useEffect } from 'react'
import { GetMovies, useMoviesDispatch, useMoviesState } from './../hooks/MovieContext'

export function Movies() {
  const state = useMoviesState();
  const dispatch = useMoviesDispatch();

  const { loading, data: movies, error } = state.movies;
  console.log(movies);

  if (loading) return <div>로딩 중..</div>
  if (error) return <div>에러가 발생하였습니다.</div>
  if (!movies) return <button onClick={() => GetMovies(dispatch)}>재검색하기</button>

  return (
    <>
      <ul>
        {
          movies.map(({ title_long, summary, large_cover_image, rating, runtime }) =>
          (
            <li>
              <h2>제목 : {title_long}</h2>
              <img src={large_cover_image} alt="" width="250"/>
              <div>
                평점 : {rating}
              </div>
              <div>
                상영 시간 : {runtime}
              </div>
              <p>{summary}</p>
            </li>
          )
          )
        }
      </ul>
    </>
  )
}