import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function AuthorUpdate(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [month, setMonth] = useState("month option");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [background, setBakground] = useState("");
  const [dataInfo, setDataInfo] = useState();

  // useEffect(() => {
  //   console.log(month);
  //   console.log(firstName);
  //   console.log(lastName);
  // }, [month, firstName, lastName]);

  function createAuthor(e) {
    e.preventDefault();

    console.log("running");
    const myData = JSON.stringify({
      author_name: firstName,
      date_of_birth: `${month} ${day}, ${year}`,
      background: background,
    });
    console.log("myData: ", myData);
    const payload = {
      method: "PUT",
      body: myData,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    async function fetchData(payload) {
      // console.log("payload: ", payload);
      console.log("props.author_id", props.authorID);
      const data = await fetch(
        `http://localhost:8086/author/${props.authorID}`,
        payload
      ).then((res) => res.json());
      setDataInfo(data);
    }

    fetchData(payload);
  }

  console.log(dataInfo);

  return (
    <div className="main-author-container">
      <h1>Create Author Page</h1>
      <div className="main-form-container">
        <form className="form-container">
          <div className="form-title-container">
            <h3>Author Info</h3>
          </div>
          <div className="first-name-container">
            <h3>First Name:</h3>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="last-name-container">
            <h3>Last Name:</h3>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="select-container">
            <h3>Month:</h3>
            <select value={month} onChange={(e) => setMonth(e.target.value)}>
              <option>Choose Month</option>
              <option value="Jan.">January</option>
              <option value="Feb.">Febuary</option>
              <option value="Mar.">March</option>
              <option value="Apr.">April</option>
              <option value="May">May</option>
              <option value="Jun.">June</option>
              <option value="Jul.">July</option>
              <option value="Aug.">August</option>
              <option value="Sep.">September</option>
              <option value="Oct.">October</option>
              <option value="Nov.">November</option>
              <option value="Dec.">December</option>
            </select>
          </div>
          <div className="input-container">
            <div className="day-input-container">
              <h3>Day:</h3>
              <input value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="year-input-container">
              <h3>Year:</h3>
              <input value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            <div className="background-input-container">
              <h3>Background:</h3>
              <input
                value={background}
                onChange={(e) => setBakground(e.target.value)}
              />
            </div>
          </div>
          <div className="button-container">
            <div className="submit-container">
              <input type="submit" onClick={(e) => createAuthor(e)} />
            </div>
            <div className="back-button-container">
              <NavLink exact to="/authors">
                <button>{"<= Back"}</button>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
