/* eslint-disable */
export const validateEmail = (emailAddress) => {
  const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailRegx.test(emailAddress)) {
    return true;
  }
  return false;
};

export const requiredValue = (value) => {
  if (value && value.trim().length > 0) {
    return true;
  }
  return false;
};