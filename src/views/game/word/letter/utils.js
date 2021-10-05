export const checkSpecial = (data) => {
  let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (spChars.test(data)) {
    return true;
  } else {
    return false;
  }
};
