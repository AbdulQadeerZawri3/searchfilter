import { useState } from "react";
import "./styles.css";
import Table from "./table";
import { Users } from "./users.js";

export default function App() {
  const [query, setQuery] = useState("");

  const variablesX = ["first_name", "last_name", "email"];

  const search = (dataa) => {
    return dataa.filter((user) =>
      variablesX.some((key) => user[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="app">
      <input
        placeholder="search here..."
        type="text"
        className="search"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Table data={search(Users)} />
    </div>
  );
}

// export default function App() {
//     const [query, setQuery] = useState("");
//     return (
//       <div className="app">
//         <input
//           className="search"
//           placeholder="Search..."
//           onChange={(e) => setQuery(e.target.value.toLowerCase())}
//         />
//         <ul className="list">
//           {Users.filter((asd) =>
//             asd.first_name.toLowerCase().includes(query)
//           ).map((user) => (
//             <li className="listItem" key={user.id}>
//               {user.first_name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
