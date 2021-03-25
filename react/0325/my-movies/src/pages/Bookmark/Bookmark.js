import { headline } from './Bookmark.module.scss'
import { Helmet } from 'react-helmet-async'
import { useBookmarkList, useBookmarkDispatch, createBookmark, deleteBookmark } from 'hooks/useBookmarks';
import { Link } from 'react-router-dom';
import { tmdb } from 'api'


/* -------------------------------------------------------------------------- */

export default function BookmarkPage(props) {
  const bookmarkList = useBookmarkList();
/* <img
              className={poster}
              src={tmdb.getImageURL(json.poster_path, 200)}
              alt={json.title}
              height={480}
            /> */
  return (
    <div className="bookmark-page">
      <Helmet>
        <title>북마크 페이지 (인증 사용자 전용) ← "나의 영화" 서비스</title>
      </Helmet>
      <ul>
        {bookmarkList.map(({
          id, title, tagline, overview, poster_path, homepage,
        }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <img
                src={tmdb.getImageURL(poster_path, 200)}
                alt={title}
                height={480}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
