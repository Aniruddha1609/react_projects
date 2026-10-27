import React from "react";
import { useCurrency } from "../contexts/currency_context";

function Dropdown({ setExcangePos }) {
    const { currencyOptions } = useCurrency();
    return (
        <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">
                From Currency:
            </label>
            <select
                className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm shadow-sm"
                onChange={(e) => setExcangePos(e.target.value)}
            >
                {currencyOptions.map((currencyOption, index) => (
                    <option
                        key={index}
                    >
                        {currencyOption}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;
