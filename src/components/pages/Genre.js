import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import GenreUpdate from "../updates/GenreUpdate";

export default function Genre(props) {
  const [dataInfo, setDataInfo] = useState("");
  const [display, setDisplay] = useState("None");

  function showUpdate() {
    setDisplay("block");
  }

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
    <div>
      <div>
        <h1>Genre</h1>
      </div>
      <div>
        <h3>{dataInfo.genre_name}</h3>
        <p>{dataInfo.description}</p>
      </div>
      <NavLink exact to="/genres">
        <button>{"<= Back"}</button>
      </NavLink>
      <button onClick={() => showUpdate()}>Edit Genre</button>
      <div style={{ display: display }}>
        <GenreUpdate genreID={props.genreID} />
      </div>
    </div>
  );
}
