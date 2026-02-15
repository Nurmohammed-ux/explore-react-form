import React, { useRef } from "react";

const UnControlled = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          ref={emailRef}
          name="email"
          id=""
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          ref={passwordRef}
          name="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UnControlled;
