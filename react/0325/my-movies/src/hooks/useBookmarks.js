import React, { useReducer, createContext, useContext } from 'react'

const initialBookmark = []

const CREATE = 'create_bookmark';
const UPDATE = 'update_bookmark';
const DELETE = 'delete_bookmark';

export const createBookmark = payload => ({
  type: CREATE,
  payload
});

export const updateBookmark = payload => ({
  type: UPDATE,
  payload
});

export const deleteBookmark = payload => ({
  type: DELETE,
  payload
});

function bookmarkReducer(state, action) {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload]
    case UPDATE:
      return state.map((bookmark) => {
        return bookmark.id === action.payload.id
          ? action.payload 
          : bookmark
      })
    case DELETE:
      return state.filter(({ id }) => id !== action.payload.id)
    default:
      return state
  }
}

const BookmarkList = createContext(null);
const BookmarkDispatch = createContext(null);

export function BookmarksContext({children}) {
  const [state, dispatch] = useReducer(bookmarkReducer, initialBookmark);

  return (
    <BookmarkList.Provider value={state}>
      <BookmarkDispatch.Provider value={dispatch}>
        {children}
      </BookmarkDispatch.Provider>
    </BookmarkList.Provider>
  )
}

export const useBookmarkList = () => {
  const state = useContext(BookmarkList);

  if (!state) throw new Error('북마크 리스트 공급자를 찾을 수 없습니다.');

  return state;
};

export const useBookmarkDispatch = () => {
  const dispatch = useContext(BookmarkDispatch);

  if (!dispatch) throw new Error('북마크 디스패치 공급자를 찾을 수 없습니다.');

  return dispatch;
};
