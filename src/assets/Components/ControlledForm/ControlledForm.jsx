import React, { useState } from "react";

const ControlledForm = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    if (password.length < 6) {
      setError("At least 6 character needed");
    } else {
      setError("");
    }
  };
  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("Password must be 6 character or longer");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" placeholder="Email" required />
        <br />
        <input
          type="password"
          name="password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          placeholder="Password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>
        <small style={{ color: "red" }}>{error}</small>
      </p>
    </div>
  );
};

export default ControlledForm;
