import { bar } from './Headerbar.module.scss'
import { HomeLink, Navigation, Profile } from 'components'
import { withAuth } from 'contexts'

/* -------------------------------------------------------------------------- */

function HeaderBar({ context }) {
  const { authUser } = context.state

  console.log(authUser);

  return (
    <header className={bar}>
      <HomeLink />
      <Navigation>{authUser && <Profile user={authUser} />}</Navigation>
    </header>
  )
}

export default withAuth(HeaderBar)
