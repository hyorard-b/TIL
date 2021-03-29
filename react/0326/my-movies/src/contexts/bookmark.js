import React, { createContext, useContext, useReducer } from 'react'

const initState = [];

const CREATE = 'create_bookmark';
const UPDATE = 'update_bookmark';
const DELETE = 'delete_bookmark';

export const addBookmarkAction = payload => ({
  type: CREATE,
  payload
});

export const updateBookmarkAction = payload => ({
  type: UPDATE,
  payload
});

export const deleteBookmarkACtion = payload => ({
  type: DELETE,
  payload
});

function bookmarkReducer(state, action) {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];
    case UPDATE:
      return state.map((bookmark) =>
        bookmark.id === action.payload.id
          ? { ...bookmark, ...action.payload }
          : bookmark
      )
    case DELETE:
      return state.filter(({id}) => id !== action.payload.id)
    default:
      return state;
  }
}

const BookmarkContext = createContext();

export default function BookmarkProvider(props) {
  const [state, dispatch] = useReducer(bookmarkReducer, initState);
  
  return (
    <BookmarkContext.Provider value={{ state, dispatch }} {...props} />
  )
}

export const useBookmark = () => {
  const context = useContext(BookmarkContext)

  console.log(context);

  return context;
};

// [{id: 1234, title:라야와 드래곤, description: ...}, {id: }]