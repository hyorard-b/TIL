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
    case 'GET_MOVIES_SUCCES':
      return {
        ...state,
        moveis: success(action.data)
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
    quality: '',
    minumumRating: 5,
    queryTerm: '',
    genre: '',
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

export async function getMovies(dispatch, params) {
  dispatch({
    type: 'GET_MOVIES'
  });

  const { quality, minimumRating, queryTerm, genre } = params;

  try {
    const response = await axios.get(
      `https://yts.mx/api/v2/list_movies.json
        ?quality=${quality}
        &minumum_rating=${minimumRating}
        &query_term=${queryTerm}
        &genre=${genre}
      `);
    
    dispatch({
      type: 'GET_MOVIES_SUCCESS',
      data: response.data,
    })
  } catch (e) {
    dispatch({
      type: 'GET_MOVIES_ERROR',
      error: e
    })
  }
}
