import { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

import GenreUpdate from "../updates/GenreUpdate";

export default function Genre(props) {
  const [dataInfo, setDataInfo] = useState("");
  const [display, setDisplay] = useState("None");
  const authToken = Cookies.get("auth_token");

  const history = useHistory();

  function showUpdate() {
    setDisplay("block");
  }

  function GenreActivity() {
    console.log("running author");
    console.log("myData: ", dataInfo);

    const payload = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Auth-Token": authToken,
      },
    };

    async function fetchData(payload) {
      // console.log("payload: ", payload);
      const data = await fetch(
        `http://localhost:8086/genre/${props.genreID}`,
        payload
      ).then((res) => res.json());
      setDataInfo(data);
      console.log(data);
    }
    history.push("/genres");

    fetchData(payload);
  }

  useEffect(() => {
    console.log("running author");
    console.log("myData: ", dataInfo);
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
      const data = await fetch(
        `http://localhost:8086/genre/${props.genreID}`,
        payload
      ).then((res) => res.json());
      setDataInfo(data);
      console.log(data);
    }

    fetchData(payload);
  }, []);

  console.log(dataInfo);

  return (
    <div className="main-genre-container">
      <div className="genre-title-container">
        <h3>Genre</h3>
      </div>
      <div className="genre-info-container">
        <h2>{dataInfo.genre_name}</h2>
        <p>{dataInfo.description}</p>
      </div>
      <button onClick={() => GenreActivity()}>
        {dataInfo.active ? "Deactivate" : "Activate"}
      </button>
      <div className="genre-button-container">
        <NavLink exact to="/genres">
          <button>{"<= Back"}</button>
        </NavLink>
        <button onClick={() => showUpdate()}>Edit Genre</button>
      </div>
      <div style={{ display: display }} className="genre-component-container">
        <GenreUpdate genreID={props.genreID} />
      </div>
    </div>
  );
}
