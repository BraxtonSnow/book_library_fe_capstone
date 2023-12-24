import { NavLink } from "react-router-dom";
import NavBar from "../navigations/NavBar";

import MainImage from "../images/MainImage";

export default function Books() {
  return (
    <div className="books-container">
      <MainImage />
      <div className="books-title-container">
        <h1>Books</h1>
        <NavBar />
      </div>
      <div className="books-button-container">
        <NavLink exact to="/create-book-page">
          <button>Create Book</button>
        </NavLink>
      </div>
      <div className="main-map-books-container">
        <div className="map-books-container"></div>
      </div>
    </div>
  );
}
