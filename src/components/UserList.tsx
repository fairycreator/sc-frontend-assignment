import React from "react";
import { User } from "../types";
import { NationalityDisplay } from "./NationalityDisplay";

type UserListProps = {
  users: User[];
};

export const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="container">
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.name} className="user-list-item">
            {user.name} - <NationalityDisplay name={user.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
