import { regExps } from "./constants";

export const replaceCharacters = (value: string): number => {
  return +value.replaceAll(regExps.removeLetters, "").replaceAll(",", "");
};

export const setNumbersWithCommas = (value: string) => {
  return value
    .replaceAll(regExps.isNumber, "")
    .replaceAll(regExps.checkSymbols, "")
    .replaceAll(regExps.separateWithCommas, ",");
};
