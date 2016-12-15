export const extractAirportCode = (string) => {
  const regExp = /\(([^)]+)\)/;
  return regExp.exec(string);
};

export const extractCity = (string) => {
  const regExp = /^([\w\s\d]+)\s\//;
  return regExp.exec(string);
};
