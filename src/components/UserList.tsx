import React from "react";

import { NationalityDisplay } from "./NationalityDisplay";

export const UserList: React.FC<{ users: string[] }> = ({ users }) => {
  const sortedUsers = [...users].sort();

  return (
    <div className="container">
      <ul className="user-list">
        {sortedUsers.map((name, index) => (
          <li key={index} className="user-list-item">
            {name} - <NationalityDisplay name={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
