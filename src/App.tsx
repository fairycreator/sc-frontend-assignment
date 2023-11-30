import React, { useState, useEffect } from "react";
import Background from "./components/Background";
import { UserList } from "./components/UserList";
import { fetchNationality, fetchUsers } from "./api";
import "./styles.css";
import storage from "./utils/storage";

function App() {
  const loadedUsers = storage.load("users");
  const initialUsers: string[] = Array.isArray(loadedUsers) ? loadedUsers : [];

  const [users, setUsers] = useState<string[]>(initialUsers);
  const [newUserName, setNewUserName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const saveUsersToStorage = (newUsers: string[]) => {
    storage.save("users", newUsers);
  };

  useEffect(() => {
    saveUsersToStorage(users);
  }, [users]);

  useEffect(() => {
    const initializeUsers = async () => {
      const apiUsers = await fetchUsers();
      setUsers([...new Set([...apiUsers, ...initialUsers])].sort());
    };
    initializeUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isValidName = (name: string) => /^[A-Za-z]+$/.test(name);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isValidName(event.target.value) || event.target.value === "") {
      setNewUserName(event.target.value);
    }
  };

  const handleKeyPress = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && newUserName) {
      event.preventDefault();
      const nameValidation = await fetchNationality(newUserName);

      if (
        nameValidation &&
        nameValidation.country &&
        nameValidation.country.length > 0
      ) {
        const newUsers = [...users, newUserName].sort();
        setUsers(newUsers);
        saveUsersToStorage(newUsers);
        setNewUserName("");
        setErrorMessage("");
      } else {
        setErrorMessage("Name not recognized or invalid.");
      }
    }
  };

  return (
    <div className="App">
      <Background />
      <h1>User Nationality Predictor</h1>
      <h3>Enter a name to see probable nationalities</h3>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <input
        type="text"
        value={newUserName}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter name and press Enter"
      />
      <UserList users={users} />
    </div>
  );
}

export default App;
