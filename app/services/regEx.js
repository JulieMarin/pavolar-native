export const extractAirportCode = (string) => {
  const regExp = /\(([^)]+)\)/;
  return regExp.exec(string);
};

export const extractCity = (string) => {
  if (string.indexOf('/') !== -1) {
    const regExp = /^([\w\s\d]+)\s\//;
    return regExp.exec(string);
  } else {
    return string;
  }
};
