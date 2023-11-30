import { useState } from "react";
import Background from "./components/Background";
import { AddUser } from "./components/AddUser";
import { UserList } from "./components/UserList";
import { User } from "./types";
import "./styles.css";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleAddUser = (userName: string, isValid: boolean) => {
    if (isValid) {
      const newUser: User = { name: userName };
      setUsers([...users, newUser]);
      setErrorMessage("");
    } else {
      setErrorMessage("Not a real name");
    }
  };

  return (
    <div className="App">
      <Background />
      <h1>User Nationality Predictor</h1>
      <h3>Enter a name to see probable nationalities and country flags</h3>
      {errorMessage && <div>{errorMessage}</div>}
      <AddUser onAddUser={handleAddUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
