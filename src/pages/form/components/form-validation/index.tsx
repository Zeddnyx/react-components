import { useState } from "react";
import Input from "components/Form/Input";
import {
  inputValidation,
  emailValidation,
  passwordValidation,
  confirmPasswordValidation,
  INPUTREGEX,
  EMAILREGEX,
  PASSWORDREGEX,
} from "configs/formValidation";

export default function Form() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      !!form.username &&
      !!form.email &&
      !!form.password &&
      !!form.confirmPassword &&
      form.password === form.confirmPassword &&
      form.username.match(INPUTREGEX) &&
      form.email.match(EMAILREGEX) &&
      form.password.match(PASSWORDREGEX)
    ) {
      alert(
        `Success \nUsername: ${form.username}, \nPassword: ${form.password}`,
      );
    } else {
      setIsError(true);
    }
  };

  const isDisabled =
    form.username === "" ||
    form.email === "" ||
    (form.password === "" && !isError) ||
    form.confirmPassword === "";

  return (
    <form className="grid gap-2">
      <Input
        logo={"/icons/iconInfo.svg"}
        type="text"
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        isError={inputValidation(form.username, "Username", isError)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        isError={emailValidation(form.email, isError)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        isError={passwordValidation(form.password, isError)}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
        isError={confirmPasswordValidation(
          form.password,
          form.confirmPassword,
          isError,
        )}
      />
      <button
        onClick={handleSubmit}
        className={isDisabled ? "btn-disabled" : "btn"}
        disabled={isDisabled}
      >
        Submit
      </button>
    </form>
  );
}
