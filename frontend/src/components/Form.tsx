import { useState } from "react";
import serviceSignUp from "../services/serviceSignup";
import serviceLogIn from "../services/serviceLogin";

const Form = (props: { type: string }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isSignUp = props.type === "signup";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    isSignUp
      ? serviceSignUp({ name, email, password })
      : serviceLogIn({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      {isSignUp && (
        <>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </>
      )}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
