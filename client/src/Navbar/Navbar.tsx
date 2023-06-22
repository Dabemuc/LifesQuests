import './Navbar.css'
import Logo from '../assets/Kamodb-Logo.png'
import LoginWrapper from './LoginWrapper/LoginWrapper'

interface Props {
  user: any, 
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleSignOut: Function
}

export default function Navbar(props: Props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/"><img src={Logo} alt="" width="100rem" height="25rem" /></a>
        <LoginWrapper user={props.user} handleSignOut={() => props.handleSignOut()} />
      </nav>
      )
}