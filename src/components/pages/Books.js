import { NavLink } from "react-router-dom";
import NavBar from "../navigations/NavBar";

export default function Books() {
  return (
    <div className="books-container">
      <div className="books-title-container">
        <h1>Books</h1>
        <NavBar />
      </div>
      <div>
        <NavLink exact to="/create-book-page">
          <button>Create Book</button>
        </NavLink>
      </div>
    </div>
  );
}
