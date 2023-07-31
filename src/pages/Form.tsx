import { useState } from "react";
import Input from "components/Input";
import {
  userValidation,
  emailValidation,
  passwordValidation,
  USERVALIDATION,
  EMAILVALIDATION,
  PASSVALIDATION,
} from "../components/Form/regex";

export default function Form() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      !!username &&
      !!email &&
      !!password &&
      username.match(USERVALIDATION) &&
      email.match(EMAILVALIDATION) &&
      password.match(PASSVALIDATION)
    ) {
      return console.log("hit api!", username, password);
    } else {
      setIsError(true);
    }
  };

  return (
    <form>
    <h2>Form Validation</h2>
      <Input
        logo={"/vite.svg"}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        isError={userValidation(username, isError)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        isError={emailValidation(email, isError)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        isError={passwordValidation(password, isError)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
