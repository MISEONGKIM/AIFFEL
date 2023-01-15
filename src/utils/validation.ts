export const emailValidation = (value: string) => {
  const reg_email =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  return reg_email.test(value);
};

export const passwordValidation = (value: string) => {
  return value.length > 9;
};

export const searchValidation = (value: string) => {
  return value.length > 0;
};
