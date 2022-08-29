export enum Routing {
  home = "/",
  notFound = "*",
}

export enum ImageTypes {
  logo = "logo",
  house = "house",
  dollar = "dollar",
  arrow = "arrow",
  arrowRight = "arrowRight",
}

export const regExps = {
  removeLetters: /[a-zA-Z]/g,
  isNumber: /[^0-9.]/g,
  checkSymbols: /(\..*)\./g,
  separateWithCommas: /\B(?=(\d{3})+(?!\d))/g,
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
