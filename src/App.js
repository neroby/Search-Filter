import { useState } from "react";
import "./App.css";
import { Users } from "./users";
import Table from "./table";

function App() {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"];
  //console.log(Users[0]["email"]);
  const search = (data) => {
    return data.filter((item) =>
      // this is too noise way we can create a var to carry it
      // item.first_name.toLowerCase().includes(query) ||
      // item.last_name.toLowerCase().includes(query) ||
      // item.email_name.toLowerCase().includes(query)
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="searching........"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* can re-place the "ul" by table */}
      {/* <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className="listItem">
            {user.first_name}
          </li>
        ))}
      </ul> */}
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
