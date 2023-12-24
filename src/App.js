import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import Books from "./components/pages/Books";
import Authors from "./components/pages/Authors";
import CreateAccountPage from "./components/pages/CreateAccountPage";
import CreateAuthorPage from "./components/pages/CreateAuthorPage";
import CreateBookPage from "./components/pages/CreateBookPage";
import CreateGenrePage from "./components/pages/CreateGenrePage";
import Genres from "./components/pages/Genres";
import Genre from "./components/pages/Genre";
import Author from "./components/pages/Author";
import Images from "./components/pages/Images";

import "./app.scss";
// import AsyncApiCall from "./util/apiWrapper";

export default function App() {
  const [authorID, setAuthorID] = useState("");
  const [genreID, setGenreID] = useState("");

  return (
    <div className="app-container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(routeProps) => <LoginPage />} />
          <Route path="/homePage" component={HomePage} />
          <Route path="/books" render={(routeProps) => <Books />} />
          <Route
            exact
            path="/authors"
            render={(routeProps) => (
              <Authors
                {...routeProps}
                setAuthorID={setAuthorID}
                // dataInfo={dataInfo}
                // setMyMethod={setMyMethod}
              />
            )}
          />
          <Route
            exact
            path="/authors/:slug"
            render={(routeProps) => (
              <Author {...routeProps} authorID={authorID} />
            )}
          />
          <Route
            exact
            path="/genres"
            render={(routeProps) => (
              <Genres {...routeProps} setGenreID={setGenreID} />
            )}
          />
          <Route
            exact
            path="/genres/:slug"
            render={(routeProps) => <Genre {...routeProps} genreID={genreID} />}
          />
          <Route exact path="/images" render={(routeProps) => <Images />} />

          <Route
            path="/create-account-page"
            render={(routeProps) => (
              <CreateAccountPage
                {...routeProps}
                // setMultiData={setMultiData}
                // setMyMethod={setMyMethod}
              />
            )}
          />
          <Route
            path="/create-author-page"
            render={(routeProps) => (
              <CreateAuthorPage
              // setMultiData={setMultiData}
              // setMyMethod={setMyMethod}
              />
            )}
          />
          <Route
            path="/create-book-page"
            render={(routeProps) => (
              <CreateBookPage
              // setMultiData={setMultiData}
              // setMyMethod={setMyMethod}
              />
            )}
          />
          <Route
            path="/create-genre-page"
            render={(routeProps) => (
              <CreateGenrePage
              // setMultiData={setMultiData}
              // setMyMethod={setMyMethod}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

// const data1 = useRef(multiData);

// function loginFetch() {
//   console.log("running");
//   // async function fetchStuff() {
//   //   const result = await AsyncApiCall(data.current);
//   //   setDataInfo(result);
//   // }
//   // fetchStuff();

//   const myData = JSON.stringify(multiData);
//   // console.log("myData: ", myData);
//   const payload = {
//     method: myMethod,
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   };
//   if (multiData) payload.body = myData;

//   async function fetchData(payload) {
//     // console.log("payload: ", payload);
//     const data = await fetch("http://localhost:8086/user", payload).then(
//       (res) => res.json()
//     );
//     setDataInfo(data);
//   }

//   fetchData(payload);
// };

// useEffect(() => {
//   console.log("dataInfo: ", dataInfo);
// }, [dataInfo]);
