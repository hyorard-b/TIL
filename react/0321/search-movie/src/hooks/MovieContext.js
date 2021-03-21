import React, { createContext, useContext, useReducer, useState } from 'react';
import axios from 'axios';

const initialState = {
  movies: {
    loading: false,
    data: null,
    error: null
  }
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = data => ({
  loading: false,
  data,
  error: null,
});

const error = e => ({
  loading: false,
  data: null,
  error: e,
});

function MovieReducer(state, action) {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        ...state,
        movies: loadingState
      }
    case 'GET_MOVIES_SUCCESS':
      return {
        ...state,
        movies: success(action.data)
      }
    case 'GET_MOVIES_ERROR':
      return {
        ...state,
        movies: error(action.error)
      }
    default:
      throw new Error('unhandled action type');
  }
}

const MoviesState = createContext(null);
const MoviesDispatch = createContext(null);
const SearchState = createContext(null);
const SetSearchState = createContext(null);

export function MoviesProvider({ children }) {
  const [state, dispatch] = useReducer(MovieReducer, initialState);
  const [search, setSearch] = useState({
    quality: null,
    minimumRating: null,
    queryTerm: null,
    genre: null,
  })

  return (
    <MoviesState.Provider value={state}>
      <MoviesDispatch.Provider value={dispatch}>
        <SearchState.Provider value={search}>
          <SetSearchState.Provider value={setSearch}>
            {children}
          </SetSearchState.Provider>
        </SearchState.Provider>
      </MoviesDispatch.Provider>
    </MoviesState.Provider>
  )
}

export function useMoviesState() {
  const state = useContext(MoviesState);

  if (!state) throw new Error('Cannot find MoviesState Provider');

  return state;
}

export function useMoviesDispatch() {
  const dispatch = useContext(MoviesDispatch);

  if (!dispatch) throw new Error('Cannot find MoviesDispatch Provider');

  return dispatch;
}

export function useSearchState() {
  const state = useContext(SearchState);

  if (!state) throw new Error('Cannot find SearchState Provider');

  return state;
}

export function useSetSearch() {
  const setSearch = useContext(SetSearchState);

  if (!setSearch) throw new Error('Cannot find SetSearch Provider');

  return setSearch;
}

export async function GetMovies(dispatch, searchState) {
  dispatch({
    type: 'GET_MOVIES'
  });

  // const { quality, minimumRating, queryTerm, genre } = params;

  const { quality, minimumRating, queryTerm, genre } = searchState;

  console.log(quality, minimumRating, queryTerm, genre);

  const qParam = quality ? `quality=${quality}&` : '';
  const mParam = minimumRating ? `minimum_rating=${minimumRating}&` : '';
  const tParam = queryTerm ? `query_term=${queryTerm}&` : '';
  const gParam = genre ? `genre=${genre}` : '';

  const url = `https://yts.mx/api/v2/list_movies.json?${qParam + mParam + tParam + gParam}`;
  console.log(url);
  try {
    const {data: res} = await axios.get(url);
    
    console.log(res.data.movies);

    const movies = res.data.movies.map(({ title_long, summary, large_cover_image, rating, runtime }) => ({ title_long, summary, large_cover_image, rating, runtime }));
    dispatch({
      type: 'GET_MOVIES_SUCCESS',
      data: movies
    })
  } catch (e) {
    dispatch({
      type: 'GET_MOVIES_ERROR',
      error: e
    })
  }
}
