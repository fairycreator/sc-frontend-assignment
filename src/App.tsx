import { useState } from "react";
import { AddUser } from "./components/AddUser";
import { UserList } from "./components/UserList";
import { User } from "./types";
import "./styles.css";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const handleAddUser = (userName: string) => {
    const newUser: User = { name: userName };
    setUsers([...users, newUser]);
  };

  return (
    <div className="App">
      <h1>User Nationality Predictor</h1>
      <h3>Enter a name to see probable nationalities and country flags</h3>
      <AddUser onAddUser={handleAddUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
