// import { useState } from "react";
import { NavLink } from "react-router-dom";

import NavBar from "../navigations/NavBar";
import MainImage from "../images/MainImage";

export default function Images() {
  // const [dataInfo, setDataInfo] = useState([]);

  // useEffect(() => {
  //   console.log("running author");
  //   console.log("myData: ", dataInfo);
  //   const payload = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   };

  //   async function fetchData(payload) {
  //     // console.log("payload: ", payload);
  //     const data = await fetch("http://localhost:8086/genres", payload).then(
  //       (res) => res.json()
  //     );
  //     setDataInfo(data);
  //     console.log(data);
  //   }

  //   fetchData(payload);
  // }, []);

  // console.log(dataInfo);

  return (
    <div className="images-container">
      <MainImage />
      <div className="images-title-container">
        <h1>Images</h1>
        <NavBar />
      </div>
      <div className="images-button-container">
        <NavLink exact to="/create-image-page">
          <button>Add Image</button>
        </NavLink>
      </div>
      <div className="main-map-images-container">
        <div className="map-images-container"></div>
      </div>
    </div>
  );
}
