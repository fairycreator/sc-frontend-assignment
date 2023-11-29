import React, { useState } from "react";

type AddUserProps = {
  onAddUser: (name: string) => void;
};

export const AddUser: React.FC<AddUserProps> = ({ onAddUser }) => {
  const [name, setName] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && name.match(/^[A-Za-z]+$/)) {
      onAddUser(name);
      setName("");
    }
  };

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Enter a name"
    />
  );
};
