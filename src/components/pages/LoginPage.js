import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
  // }

  // useEffect(() => {
  //   console.log("dataInfo: ", dataInfo);
  // }, [dataInfo]);

  return (
    <div className="main-login-container">
      <div className="login-title-container">
        <h1>Welcome to our Book Library!</h1>
      </div>
      <div className="input-info-container">
        <form className="form-container">
          <div className="form-title-container">
            <h2>Login Here</h2>
          </div>
          <div className="email-container">
            <h3>Email:</h3>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="password-container">
            <h3>Password:</h3>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submit-container">
            <NavLink to={password && email ? "/homepage" : "/"}>
              <input type="submit" />
            </NavLink>
          </div>
        </form>
      </div>
      <div className="create-account-container">
        <NavLink to="/create-account-page">Create Account</NavLink>
      </div>
    </div>
  );
}
