import { createContext, useContext } from "react";

const currencyContext = createContext({});

export const CurrencyContextProvider = currencyContext.Provider;

export function useCurrency() {
    return useContext(currencyContext);
}
