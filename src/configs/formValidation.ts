export const EMAILREGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
export const PASSWORDREGEX = /^(?=^[ -~]{6,16}$)(?=.*([a-z][A-Z])).+$/; // min 6 max 16, min 1 lowwercase min 1 uppercase
export const INPUTREGEX = /^(?=^[ -~]{6,20}$)[a-zA-Z0-9 ]+$/;

export const inputValidation = (
  input: string,
  name: string,
  error: boolean,
) => {
  return error && input.length <= 0
    ? `${name} must be filled`
    : error && (input.length > 20 || input.length < 6)
    ? `${name} must be 6-20 characters`
    : error && !input.match(INPUTREGEX)
    ? "Only letters, numbers, and spaces are allowed"
    : "";
};

export const emailValidation = (email: string, error: boolean) => {
  return error && email.length <= 0
    ? "email must be filled"
    : error && !email.match(EMAILREGEX)
    ? "email must be valid"
    : "";
};

export const passwordValidation = (password: string, error: boolean) => {
  return error && password.length <= 0
    ? "password must be filled"
    : error && !password.match(PASSWORDREGEX)
    ? "password must be 6-16 characters, lowercase and uppercase"
    : "";
};
export const confirmPasswordValidation = (
  password: string,
  confirmPassword: string,
  error: boolean,
) => {
  return error && password.length <= 0
    ? "password must be filled"
    : error && password !== confirmPassword
    ? "passwords do not match"
    : "";
};
