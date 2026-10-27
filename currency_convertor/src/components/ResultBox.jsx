import React from "react";
import { useCurrency } from "../contexts/currency_context";

function ResultBox() {
    const { convertedAmount } = useCurrency();
    return (
        <div className="mt-6 p-4 bg-sky-50/70 border border-sky-100 rounded-lg max-w-sm">
            <p className="text-sm font-semibold text-gray-800">
                Converted Amount:{" "}
                <span className="font-bold text-gray-900">
                    {convertedAmount}
                </span>
            </p>
        </div>
    );
}

export default ResultBox;
