export const USERREGEX = /^(?=^[ -~]{6,10}$)[a-zA-Z\-\-0-9]+$/; // only letters and numbers
export const EMAILREGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
export const PASSWORDREGEX = /^(?=^[ -~]{6,16}$)(?=.*([a-z][A-Z])).+$/; // min 6 max 16, min 1 lowwercase min 1 uppercase

export const userValidation = (username: string, error: boolean) => {
  return error && username.length <= 0
    ? "username must be filled"
    : (error && username.length > 16) || (error && username.length <= 5)
    ? "username must be 6-10 characters"
    : error && !username.match(USERREGEX)
    ? "only letter and numbers are allowed"
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
