import { headline } from './Bookmark.module.scss'
import { Helmet } from 'react-helmet-async'
import { useBookmark } from 'contexts/bookmark'

/* -------------------------------------------------------------------------- */

export default function BookmarkPage(props) {
  const { state : bookmarkList } = useBookmark();

  return (
    <div className="bookmark-page">
      <Helmet>
        <title>북마크 페이지 (인증 사용자 전용) ← "나의 영화" 서비스</title>
      </Helmet>
      <ul>
        {bookmarkList.map(({ id, homepage, overview, poster, tagline, title }) => {
          return (
            <li>
            <h2>
              {title}
            </h2>
            <img src={poster} alt="" />
            
          </li>
          )
          
        })}
      </ul>
    </div>
  )
}
