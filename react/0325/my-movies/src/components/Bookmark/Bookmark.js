import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as ActiveHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as InactiveHeart } from '@fortawesome/free-regular-svg-icons';

export default function BookmarkButton({ label, isActive, iconProps, ...restProps }) {
  const activeHeart = <FontAwesomeIcon icon={ActiveHeart} size={iconProps.size} color="red" />;
  const inActiveHeart = <FontAwesomeIcon icon={InactiveHeart} size={iconProps.size} color="red" />;

  const bookLabel = `${label} ${isActive ? '제거' : '추가'}`;

  return (
    <button label={bookLabel} aria-label={bookLabel} {...restProps}>
      {isActive ? activeHeart : inActiveHeart}
    </button>
  )
}