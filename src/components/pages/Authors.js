import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import NavBar from "../navigations/NavBar";
import AuthorsMapper from "../mappers/AuthorsMapper";

export default function Authors(props) {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    console.log("running author");
    // console.log("myData: ", myData);
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    async function fetchData(payload) {
      // console.log("payload: ", payload);
      const data = await fetch("http://localhost:8086/authors", payload).then(
        (res) => res.json()
      );
      setDataInfo(data);
      console.log(data);
    }

    fetchData(payload);
  }, []);

  console.log(dataInfo);

  return (
    <div className="authors-container">
      <div className="authors-title-container">
        <h1>Authors</h1>
        <NavBar />
      </div>
      <div>
        <NavLink exact to="/create-author-page">
          <button>Create Author</button>
        </NavLink>
      </div>
      <AuthorsMapper dataInfo={dataInfo} setAuthorID={props.setAuthorID} />
    </div>
  );
}
