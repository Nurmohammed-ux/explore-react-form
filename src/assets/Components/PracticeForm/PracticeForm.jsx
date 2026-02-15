import React, { useState } from "react";
import useFormHook from "../PracticeHook/PracticeHook";

const PracticeForm = () => {
  const [name, changeFieldName] = useFormHook("");
  const [email, changeFieldEmail] = useFormHook("");
  const [password, changeFieldPassword] = useFormHook("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    if (password.length < 6) {
      setError("At least 6 character is needed");
    } else {
      setError("");
    }
  };
  return (
    <div className="bg-black p-8">
      <form onSubmit={handleSubmit}>
        <input
          className="bg-white font-medium px-4 py-1 rounded-xl"
          type="text"
          onChange={changeFieldName}
          name="name"
          placeholder="Name"
        />
        <br />
        <input
          className="bg-white font-medium mt-4 px-4 py-1 rounded-xl"
          type="email"
          name="email"
          onChange={changeFieldEmail}
          placeholder="Email"
        />
        <br />
        <input
          className="bg-white font-medium mt-4 px-4 py-1 rounded-xl"
          type="password"
          onChange={changeFieldPassword}
          name="password"
          placeholder="Password"
        />
        <br />
        <input
          className="bg-white font-medium my-4 px-4 py-1 rounded-xl"
          type="submit"
          value="Submit"
        />
        <p><small className="bg-white p-2 my-8 text-red-500">{error}</small></p>
      </form>
    </div>
  );
};

export default PracticeForm;
