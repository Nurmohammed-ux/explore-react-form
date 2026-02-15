import React from "react";
import useInputHook from "../../../../hooks/useInputHook";

const HookForm = () => {
  const [name, onChangeName] = useInputHook("");
  const [email, onChangeEmail] = useInputHook("");
  const [password, onChangePassword] = useInputHook("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, name, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={onChangeName}
          name="name"
          placeholder="Name"
        />
        <br />
        <input
          type="email"
          onChange={onChangeEmail}
          name="email"
          id=""
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          onChange={onChangePassword}
          name="password"
          placeholder="Password"
        />
        <br />
        <input className="border p-2 mt-2 rounded-xl" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
