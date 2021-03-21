import React from 'react';

import { useSearchState, useSetSearch, GetMovies } from '../hooks/movieContext';
import { useMoviesDispatch } from './../hooks/MovieContext';

export function SearchMovie() {
  const searchState = useSearchState;
  const setSearch = useSetSearch;
  const dispatch = useMoviesDispatch;

  const handleChange = e => {
    const { name, value } = e.target;

    setSearch({
      ...searchState,
      [name]: value
    });
  }

  return (
    <>
      <span>화질</span>
      <select name="quality" id="" onChange={handleChange}>
        <option value={null}>--choose quality--</option>
        <option value="720p">720p</option>
        <option value="1080p">1080p</option>
        <option value="2160p">2160p</option>
        <option value="3D">3D</option>
      </select>
      <span>영화 평점</span>
      <input type="range" name="minimumRating" min="0" max="9" onChange={handleChange}/>
      <span>검색어</span>
      <input type="text" name="queryTerm" placeholder="영화 제목, 배우 ..." onChange={handleChange} />
      <span>장르</span>
      <input type="text" name="genre" placeholder="action" onChange={handleChange} />
      <button onClick={() => GetMovies(dispatch)}>검색하기</button>
    </>
  )
}