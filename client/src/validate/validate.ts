export const validate = () => {};

export const validateUsername = (username: string) => {
  const usernameRegex: RegExp = /^[a-zA-Z0-9_\.]+$/;
  return usernameRegex.test(username);
};
