import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function CreateAuthorPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [month, setMonth] = useState("");
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
      method: "POST",
      body: myData,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    async function fetchData(payload) {
      // console.log("payload: ", payload);
      const data = await fetch("http://localhost:8086/author", payload).then(
        (res) => res.json()
      );
      setDataInfo(data);
    }

    fetchData(payload);
  }

  console.log(dataInfo);

  return (
    <div>
      <h1>Create Author Page</h1>
      <div>
        <form>
          <div>
            <h3>Author Info</h3>
          </div>
          <div>
            <h3>First Name</h3>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <h3>Last Name</h3>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <h3>Month</h3>
            <select>
              <option>Choose Month</option>
              <option value={month} onClick={() => setMonth("Jan.")}>
                January
              </option>
              <option value={month} onSelect={() => setMonth("Feb.")}>
                Febuary
              </option>
              <option value={month} onSelect={() => setMonth("Mar.")}>
                March
              </option>
              <option value={month} onSelect={() => setMonth("Apr.")}>
                April
              </option>
              <option value={month} onSelect={() => setMonth("May")}>
                May
              </option>
              <option value={month} onSelect={() => setMonth("Jun.")}>
                June
              </option>
              <option value={month} onSelect={() => setMonth("Jul.")}>
                July
              </option>
              <option value={month} onSelect={() => setMonth("Aug.")}>
                August
              </option>
              <option value={month} onSelect={() => setMonth("Sep.")}>
                September
              </option>
              <option value={month} onSelect={() => setMonth("Oct.")}>
                October
              </option>
              <option value={month} onSelect={() => setMonth("Nov.")}>
                November
              </option>
              <option value={month} onSelect={() => setMonth("Dec.")}>
                December
              </option>
            </select>
            <div>
              <h3>Day</h3>
              <input value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div>
              <h3>Year</h3>
              <input value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            <div>
              <h3>Background</h3>
              <input
                value={background}
                onChange={(e) => setBakground(e.target.value)}
              />
            </div>
          </div>
          <input type="submit" onClick={(e) => createAuthor(e)} />
          <div>
            <NavLink exact to="/authors">
              <button>{"<= Back"}</button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
