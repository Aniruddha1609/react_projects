import React from "react";

function Dropdown() {
    return (
        <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">
                From Currency:
            </label>
            <select className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm shadow-sm">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
            </select>
        </div>
    );
}

export default Dropdown;
