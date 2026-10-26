import React from "react";

function Input() {
    return (
        <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">
                Amount:
            </label>
            <input
                type="number"
                defaultValue="1"
                className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm shadow-sm"
            />
        </div>
    );
}

export default Input;
