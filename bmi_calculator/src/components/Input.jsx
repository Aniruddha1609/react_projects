import React from "react";

function Input({ attribute, value, setValue, unit }) {
    return (
        <div>
            <label
                htmlFor={attribute}
                className="block text-sm font-semibold text-gray-700 mb-1"
            >
                {attribute + " "}
                ({unit})
            </label>
            <input
                type="number"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                id={attribute}
                placeholder={`Enter ${attribute} value`}
                className="w-full px-3 py-2.5 bg-white border border-gray-400 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors"
            />
        </div>
    );
}

export default Input;
