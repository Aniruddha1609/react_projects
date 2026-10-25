import React from "react";
import { useWeather } from "../contexts/weather_context";

function Button() {
    const { input, setInput, setLocation } = useWeather();
    const handleSubmit = (e) => {
        e.preventDefault();
        setLocation(input);
    };
    return (
        <button
            onClick={handleSubmit}
            type="submit"
            className="px-6 py-3 bg-[#EAEAEA] hover:bg-gray-200 text-gray-800 font-medium text-sm transition-colors rounded-r-md border-l border-gray-300 focus:outline-none"
        >
            Get
        </button>
    );
}

export default Button;
