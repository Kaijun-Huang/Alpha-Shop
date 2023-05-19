import { createContext } from "react";
const buyerInfo = {
  salutation: "",
  name: "",
  mobile: "",
  Email: "",
  city: "",
  address: "",
};

export const BuyerInfoContext = createContext(buyerInfo);
