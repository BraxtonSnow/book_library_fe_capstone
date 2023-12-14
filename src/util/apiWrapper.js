// import axios from "axios";
// import React, { useState } from "react";

// export default async function AsyncApiCall(data) {
//   // const [people, setPeople] = useState([]);
//   const url = "http://localhost:8086/user";

//   async function postJSON(data1) {
//     console.log("data1: ", data1);

//     const stringifiedBody = JSON.stringify(data1);
//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: stringifiedBody,
//         mode: "no-cors",
//       }).then((res) => res.json());

//       console.log("Success:", response);
//       return response;
//     } catch (error) {
//       console.error("Error: we have a problem", error);
//     }
//   }

//   return postJSON(data);
// }
