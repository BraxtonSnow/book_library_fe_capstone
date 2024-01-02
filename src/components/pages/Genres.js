import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";

import NavBar from "../navigations/NavBar";
import GenresMapper from "../mappers/GenresMapper";
import MainImage from "../images/MainImage";

export default function Genres(props) {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    console.log("running author");
    const authToken = Cookies.get("auth_token");
    // console.log("myData: ", dataInfo);
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Auth-Token": authToken,
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
    <div className="genres-container">
      <MainImage />
      <div className="genres-title-container">
        <h1>Genres</h1>
        <NavBar />
      </div>
      <div className="genres-button-container">
        <NavLink exact to="/create-genre-page">
          <button>Create Genre</button>
        </NavLink>
      </div>
      <div className="main-map-genres-container">
        <div className="map-genres-container">
          <GenresMapper dataInfo={dataInfo} setGenreID={props.setGenreID} />
        </div>
      </div>
    </div>
  );
}
