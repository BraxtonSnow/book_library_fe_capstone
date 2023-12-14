import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Author(props) {
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
    <div>
      <div>
        <h3>Author</h3>
      </div>
      <div>
        <h2>{dataInfo.author_name}</h2>
        <p>{dataInfo.background}</p>
        <h5>{dataInfo.date_of_birth}</h5>
      </div>
      <div>
        <NavLink exact to="/authors">
          <button>{"<= Back"}</button>
        </NavLink>
      </div>
    </div>
  );
}
