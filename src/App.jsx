import { useState } from "react";
import "./App.css";
import Employee from "./Employee";
import {v4 as uuidv4} from 'uuid'

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id:1,
      name: "Abel",
      role: "Singer",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Weeknd_-_After_Hours.png/220px-The_Weeknd_-_After_Hours.png",
    },
    {
      id:2,
      name: "John",
      role: "dev",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id:3,
      name: "Reece",
      role: "Footballer",
      img: "https://tmssl.akamaized.net/images/foto/galerie/reece-james-chelsea-2023-24-1696599017-118596.jpg?lm=1696599037",
    },
  ]);

  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <h1>Not showing</h1>
      )}
    </div>
  );
}

export default App;
