import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";

export default function CreateBookPage() {
  const [genreName, setGenreName] = useState("");
  const [description, setDescription] = useState("");
  const [dataInfo, setDataInfo] = useState("");

  function createGenre(e) {
    e.preventDefault();

    const authToken = Cookies.get("auth_token");

    console.log("running");
    const myData = JSON.stringify({
      genre_name: genreName,
      description: description,
    });
    console.log("myData: ", myData);
    const payload = {
      method: "POST",
      body: myData,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Auth-Token": authToken,
      },
    };

    async function fetchData(payload) {
      // console.log("payload: ", payload);
      const data = await fetch("http://localhost:8086/genre", payload).then(
        (res) => res.json()
      );
      setDataInfo(data);
    }

    fetchData(payload);
  }

  console.log(dataInfo);

  return (
    <div className="main-book-container">
      <h1>Create Genre Page</h1>
      <div className="main-form-container">
        <form className="form-container">
          <div className="form-title-container">
            <h3>Genre Info</h3>
          </div>
          <div className="book-title-container">
            <h3>Genre</h3>
            <input
              value={genreName}
              onChange={(e) => setGenreName(e.target.value)}
            />
          </div>
          <div className="description-container">
            <h3>Description</h3>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <input type="submit" onClick={(e) => createGenre(e)} />
            <NavLink exact to="/genres">
              <button>{"<= Back"}</button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
