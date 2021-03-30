import { container, avatar as imgPath } from './Profile.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { LazyLoadingImg } from 'components'
import { useSelector } from 'react-redux'
import { selectAuth } from 'redux/storage/auth/auth'

/* component ---------------------------------------------------------------- */

export default function Profile() {
  // const authUser = useSelector((state) => state.auth.authUser);
  const auth = useSelector(selectAuth);
  const { photoURL, displayName } = auth.authUser;
  const figure = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  }

  return (
    <AnimatePresence>
      <motion.figure
        key={figure}
        variants={figure}
        initial="hidden"
        animate="visible"
        className={container}
      >
        <LazyLoadingImg src={photoURL} size={24} alt="" className={imgPath} />
        <figcaption>‪{displayName}</figcaption>
      </motion.figure>
    </AnimatePresence>
  )
}