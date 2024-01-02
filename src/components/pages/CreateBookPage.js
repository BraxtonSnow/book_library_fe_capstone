import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function CreateBookPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [author, setAuthor] = useState("author option");

  return (
    <div className="main-book-container">
      <h1>Create Book Page</h1>
      <div className="main-form-container">
        <form className="form-container">
          <div className="form-title-container">
            <h3>Book Info</h3>
          </div>
          <div className="book-title-container">
            <h3>Title:</h3>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="description-container">
            <h3>Description:</h3>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="author-select-container">
            <h3>Author:</h3>
            {/* <select value={author} onChange={(e) => setAuthor(e.target.value)}>
              {value.map((options, index) => (
                <option>{options.name}</option>
              ))}
            </select> */}
          </div>
          <div>
            <h3>Genre:</h3>
          </div>
          <div>
            <input type="submit" />
            <NavLink exact to="/books">
              <button>{"<= Back"}</button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
