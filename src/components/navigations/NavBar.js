import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navlink-container">
        <NavLink to="/homepage">
          <button>Home Page</button>
        </NavLink>
        <NavLink to="/books">
          <button>Books</button>
        </NavLink>
        <NavLink to="/authors">
          <button>Authors</button>
        </NavLink>
        <NavLink to="/genres">
          <button>Genres</button>
        </NavLink>
        <NavLink to="/">
          <button>Log Out</button>
        </NavLink>
      </div>
    </div>
  );
}
