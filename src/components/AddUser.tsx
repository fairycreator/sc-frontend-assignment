import React, { useState } from "react";

type AddUserProps = {
  onAddUser: (userName: string) => void;
};

export const AddUser: React.FC<AddUserProps> = ({ onAddUser }) => {
  const [userName, setUserName] = useState("");

  const handleSubmit = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && userName.match(/^[A-Za-z]+$/)) {
      onAddUser(userName);
      setUserName("");
    }
  };

  return (
    <input
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      onKeyPress={handleSubmit}
      placeholder="Enter a name"
    />
  );
};
