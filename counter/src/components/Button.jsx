import React from "react";
import { useCounter } from "../contexts/counter_context";

function Button({ attribute }) {
    const { setCounter, counter } = useCounter();
    const handleClick = () => {
        if (attribute === "+") setCounter((prev) => prev + 1);
        if (attribute === "-" && counter) setCounter((prev) => prev - 1);
    };
    return (
        <div className="flex gap-4 w-full">
            <button
                onClick={handleClick}
                type="button"
                className="flex-1 py-3 px-4 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 text-gray-800 font-bold rounded-lg border border-gray-200 shadow-sm text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
                {attribute}
            </button>
        </div>
    );
}

export default Button;
