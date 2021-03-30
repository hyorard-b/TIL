import { combineReducers } from 'redux';
import { authReducer } from './auth/auth';
import { bookmarksReducer } from './bookmarks/bookmark';

const rootReducer = combineReducers({
  auth: authReducer,
  bookmarks: bookmarksReducer,
});

export default rootReducer;