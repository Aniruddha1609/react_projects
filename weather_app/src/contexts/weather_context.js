import { createContext, useContext } from "react";

const weatherContext = createContext({
    temp: "",
    location: "",
    condition: "",
    temp: "",
    input: "",
    setInput: () => {},
    setLocation: () => {},
});

export const WeatherContextProvider = weatherContext.Provider;

export function useWeather() {
    return useContext(weatherContext);
}
