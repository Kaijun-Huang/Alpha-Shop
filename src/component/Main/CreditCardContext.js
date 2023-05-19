import { createContext } from "react";
const creditCardData = {
  cardOwner: "",
  cardNum: "",
  expireDate: "",
  cvc: "",
};

export const CreditCardContext = createContext(creditCardData);
