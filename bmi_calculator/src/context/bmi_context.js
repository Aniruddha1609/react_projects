import { createContext, useContext } from "react";

const bmiContext = createContext({
    height: "",
    weight: "",
    bmi: "",
    setBmi: () => {},
});

export const BmiProvider = bmiContext.Provider;

export function useBmi() {
    return useContext(bmiContext);
}
