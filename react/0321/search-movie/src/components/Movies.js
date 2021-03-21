import React, { useEffect } from 'react'
import { getMovies, useMoviesDispatch, useMoviesState } from '../hooks/movieContext'

export function Movies() {
  const state = useMoviesState();
  const dispatch = useMoviesDispatch();

  const { loading, data: movies, error } = state.movies;

  useEffect(() => {
    getMovies(dispatch);
  });

  if (loading) return <div>로딩 중..</div>
  if (error) return <div>에러가 발생하였습니다.</div>
  if (!movies) return <button onClick={ }>재검색하기</button>

  return (
    <>
      <ul>
        {movies.map(movie =>
          <li>
            {movie}
          </li>)}
      </ul>
    </>
  )
}