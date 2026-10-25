import React from "react";
import { useWeather } from "../contexts/weather_context";

function Input() {
    const { input, setInput } = useWeather();
    return (
        <input
            value={input ?? ""}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter location here"
            className="flex-grow px-4 py-3 bg-[#EAEAEA] text-gray-800 placeholder-gray-500 text-sm focus:outline-none rounded-l-md"
        />
    );
}

export default Input;
