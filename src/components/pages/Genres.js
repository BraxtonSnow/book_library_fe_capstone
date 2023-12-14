import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import NavBar from "../navigations/NavBar";
import GenresMapper from "../mappers/GenresMapper";

export default function Genres(props) {
  const [dataInfo, setDataInfo] = useState("");

  useEffect(() => {
    console.log("running author");
    console.log("myData: ", dataInfo);
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    async function fetchData(payload) {
      // console.log("payload: ", payload);
      const data = await fetch("http://localhost:8086/genres", payload).then(
        (res) => res.json()
      );
      setDataInfo(data);
      console.log(data);
    }

    fetchData(payload);
  }, []);

  console.log(dataInfo);

  return (
    <div className="books-container">
      <div className="books-title-container">
        <h1>Genres</h1>
        <NavBar />
      </div>
      <div>
        <NavLink exact to="/create-genre-page">
          <button>Create Genre</button>
        </NavLink>
      </div>
      <div>
        <GenresMapper dataInfo={dataInfo} setGenreID={props.setGenreID} />
      </div>
    </div>
  );
}
