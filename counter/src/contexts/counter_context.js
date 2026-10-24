import { createContext, useContext } from "react";

const CounterContext = createContext({
    counter: 0,
    setCounter: () => {},
});

export const CounterProvider = CounterContext.Provider;

export function useCounter() {
    return useContext(CounterContext);
}
