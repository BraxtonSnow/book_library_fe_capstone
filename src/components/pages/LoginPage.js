import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  // const [dataInfo, setDataInfo] = useState([]);

  function loginFetch(e) {
    e.preventDefault();
    console.log("running");

    const myData = JSON.stringify({
      email: email,
      password: password,
    });

    const payload = {
      method: "POST",
      body: myData,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    async function fetchData(payload) {
      console.log("payload: ", payload);
      const data = await fetch("http://localhost:8086/auth/user", payload);
      const response = await data.json();

      // .then(
      //   (res) => res.json()
      // );
      Cookies.set("auth_token", response.auth.auth_token);
      console.log(response);

      if (response) {
        history.push("/homepage");
      } else {
        console.log("login did not work");
      }
    }

    fetchData(payload);
  }

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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submit-container">
            <button onClick={loginFetch}>Submit</button>
          </div>
        </form>
      </div>
      <div className="create-account-container">
        <NavLink to="/create-account-page">Create Account</NavLink>
      </div>
    </div>
  );
}
