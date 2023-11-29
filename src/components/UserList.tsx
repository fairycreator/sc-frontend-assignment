import React, { useEffect, useState } from "react";
import { fetchUsers } from "../api";
import { User } from "../types";
import { NationalityDisplay } from "./NationalityDisplay";

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchUsers();
      if (usersData === null) {
        setError("Failed to load users.");
      } else {
        setUsers(usersData.map((userName) => ({ name: userName })));
      }
    };

    getUsers();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.name}>
          {user.name} - <NationalityDisplay name={user.name} />
        </div>
      ))}
    </div>
  );
};
