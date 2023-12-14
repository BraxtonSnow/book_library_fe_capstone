import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function CreateBookPage() {
  const [genreName, setGenreName] = useState("");
  const [description, setDescription] = useState("");
  const [dataInfo, setDataInfo] = useState("");

  function createGenre(e) {
    e.preventDefault();

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
    <div>
      <h1>Create Genre Page</h1>
      <div>
        <div>
          <form>
            <div>
              <h3>Genre Info</h3>
            </div>
            <div>
              <h3>Genre</h3>
              <input
                value={genreName}
                onChange={(e) => setGenreName(e.target.value)}
              />
            </div>
            <div>
              <h3>Description</h3>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <input type="submit" onClick={(e) => createGenre(e)} />
          </form>
          <div>
            <NavLink exact to="/genres">
              <button>{"<= Back"}</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
