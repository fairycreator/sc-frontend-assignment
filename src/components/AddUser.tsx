import React, { useState } from "react";

type AddUserProps = {
  onAddUser: (name: string, isValid: boolean) => void;
};

export const AddUser: React.FC<AddUserProps> = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const isValidName = (name: string) => {
    const basicCheck = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(name);
    const longSequenceCheck = /(.)\1{2,}/.test(name);
    return basicCheck && !longSequenceCheck;
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      const isValid = isValidName(name);
      if (isValid) {
        onAddUser(name, isValid);
        setName("");
        setError("");
      } else {
        setError("Invalid name. Please enter a real name.");
      }
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter a name"
      />
      {error && <div className="error-message">{error}</div>}{" "}
    </div>
  );
};
