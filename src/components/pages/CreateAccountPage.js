import { useState } from "react";
import { NavLink } from "react-router-dom";

// import AsyncApiCall from "../../util/apiWrapper";

export default function CreateAccountPage(props) {
  // console.log(props.setMultiData);
  const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataInfo, setDataInfo] = useState("");

  function createAccount(e) {
    e.preventDefault();

    console.log("running");
    const myData = JSON.stringify({
      user_name: firstName,
      email: email,
      password: password,
    });
    // console.log("myData: ", myData);
    const payload = {
      method: "POST",
      body: myData,
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    async function fetchData(payload) {
      // console.log("payload: ", payload);
      const data = await fetch("http://localhost:8086/user", payload).then(
        (res) => res.json()
      );
      setDataInfo(data);
    }

    fetchData(payload);
  }

  console.log(dataInfo);

  // useEffect(() => {
  //   console.log("dataInfo: ", dataInfo);
  // }, [dataInfo]);

  // props.setMultiData({
  //   user_name: firstName,
  //   email: email,
  //   password: password,
  // });
  // props.setMyMethod("POST");

  return (
    <div className="create-account-container">
      <div className="create-account-title-container">
        <h1>Create Account Page</h1>
      </div>
      <form className="form-container">
        <div className="form-title-container">
          <h3>User Info</h3>
        </div>
        <div>
          First Name:
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        {/* <input value={lastName} onChange={(e) => setLastName(e.target.value)} /> */}
        <div>
          Email:
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          Password:
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" onClick={(e) => createAccount(e)} />
          <NavLink exact to="/">
            <button>{"<= Back"}</button>
          </NavLink>
          {/* <AsyncApiCall /> */}
        </div>
      </form>
    </div>
  );
}
