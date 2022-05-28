// Common builder functions
import faker from "faker";

export const getPassword = (...args: any[]): string =>
  `!0_Oo${faker.internet.password(...args)}`;
export const getUsername = faker.internet.userName;
export const genId = faker.random.uuid;
export const genName = faker.name.findName;
export const genEmail = faker.internet.email;
export const genCompanyName = faker.company.companyName;
export const genParagraph = faker.lorem.paragraph;
export const genTitle = (): string => faker.lorem.slug(3);
export const genNumber = faker.random.number;
export const getBoolean = faker.random.boolean;
export const genBiasBoolean = (bias: number): boolean => {
  if (bias > 1 || bias < 0) {
    throw new Error(
      `Bias must be a number between 0 and 1. Value ${bias} is not valid`
    );
  }
  const random = Math.random();
  return random <= bias;
};
export const genDocument = (digits: number): string => {
  let document = "";
  for (let i = 0; i < digits; i++) {
    document += genNumber(9);
  }
  return document;
};
export const genMobilPhone = (countryCode: string): string => {
  return `+${countryCode} ${genDocument(3)} ${genDocument(3)} ${genDocument(
    4
  )}`;
};

export const fillNumber = (num: string, max?: number): string => {
  const maxNumLength = max ? String(max).length : num.length;
  let newId = num;
  for (let i = 0; i < maxNumLength - num.length; i++) {
    newId = `0${newId}`;
  }
  return newId;
};

export const chooseRandom = <T>(arr: T[]): T | undefined => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const chooseRandomEnum = <T>(anEnum: T): T[keyof T] => {
  const enumValues = Object.keys(anEnum);
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  const randomEnumKey = enumValues[randomIndex] as keyof T;
  const randomEnumValue = anEnum[randomEnumKey];
  return randomEnumValue;
};
