import { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

import NavBar from "../navigations/NavBar";
import AuthorsMapper from "../mappers/AuthorsMapper";
import MainImage from "../images/MainImage";

export default function Authors(props) {
  const [dataInfo, setDataInfo] = useState([]);

  const history = useHistory();

  function CheckAuth() {
    history.push("/");
  }

  useEffect(() => {
    console.log("running author");
    const authToken = Cookies.get("auth_token");
    // console.log("myData: ", myData);
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
      const data = await fetch("http://localhost:8086/authors", payload).then(
        (res) => res.json()
      );
      if (data) {
        setDataInfo(data);
        console.log(data);
      } else {
        CheckAuth();
      }
    }

    fetchData(payload);
  }, []);

  console.log(dataInfo);

  return (
    <div className="authors-container">
      <MainImage />
      <div className="authors-title-container">
        <h1>Authors</h1>
        <NavBar />
      </div>
      <div className="authors-button-container">
        <NavLink exact to="/create-author-page">
          <button>Create Author</button>
        </NavLink>
      </div>
      <div className="main-map-authors-container">
        <div className="map-authors-container">
          <AuthorsMapper dataInfo={dataInfo} setAuthorID={props.setAuthorID} />
        </div>
      </div>
    </div>
  );
}
