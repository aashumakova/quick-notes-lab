import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // delete the token from local storage
    // set the user to null
    userService.logOut()
    setUser(null)
  }
  return (
    <nav>
      <Link to="/notes">All notes</Link>
      &nbsp;&nbsp;<span>Hi, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
      
    </nav>
  );
}