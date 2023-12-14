import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function CreateBookPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Create Book Page</h1>
      <div>
        <div>
          <form>
            <div>
              <h3>Book Info</h3>
            </div>
            <div>
              <h3>Title</h3>
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <h3>Description</h3>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" />
          </form>
          <div>
            <NavLink exact to="/books">
              <button>{"<= Back"}</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
