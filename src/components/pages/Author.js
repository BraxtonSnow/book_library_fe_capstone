import { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

import AuthorUpdate from "../updates/AuthorUpdate";

export default function Author(props) {
  const [dataInfo, setDataInfo] = useState("");
  const [display, setDisplay] = useState("None");
  const authToken = Cookies.get("auth_token");

  const history = useHistory();

  function ShowUpdateContent() {
    setDisplay("block");
  }

  function AuthorActivity() {
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
        `http://localhost:8086/author/${props.authorID}`,
        payload
      ).then((res) => res.json());
      setDataInfo(data);
      console.log(data);
    }
    history.push("/authors");

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
        `http://localhost:8086/author/${props.authorID}`,
        payload
      ).then((res) => res.json());
      setDataInfo(data);
      console.log(data);
    }

    fetchData(payload);
  }, []);

  console.log(dataInfo);

  return (
    <div className="main-author-container">
      <div className="author-title-container">
        <h3>Author</h3>
      </div>
      <div className="author-info-container">
        <h2>{dataInfo.author_name}</h2>
        <p>{dataInfo.background}</p>
        <h5>{dataInfo.date_of_birth}</h5>
      </div>
      <button onClick={() => AuthorActivity()}>
        {dataInfo.active ? "Deactivate" : "Activate"}
      </button>
      <div className="author-button-container">
        <NavLink exact to="/authors">
          <button>{"<= Back"}</button>
        </NavLink>
        <button onClick={() => ShowUpdateContent()}>{"Edit Author"}</button>
      </div>
      <div style={{ display: display }} className="author-component-container">
        <AuthorUpdate authorID={props.authorID} />
      </div>
    </div>
  );
}
