import { createContext, useContext, useState } from "react";

export const CreditCardContext = createContext();

export const useCreditCard = () => useContext(CreditCardContext);

export const CreditCardProvider = ({ children }) => {
  const [creditCard, setCreditCard] = useState({
    cardholderName: "",
    cardNumber: "",
    expirationDate: "",
    ccv: "",
  });

  return (
    <CreditCardContext.Provider value={{ creditCard, setCreditCard }}>
      {children}
    </CreditCardContext.Provider>
  );
};