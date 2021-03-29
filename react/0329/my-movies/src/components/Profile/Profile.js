import { container, avatar as imgPath } from './Profile.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { LazyLoadingImg } from 'components'

/* component ---------------------------------------------------------------- */

export default function Profile({ authUser: { displayName, photoURL } }) {
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
