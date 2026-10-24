import React from "react";
import { useBmi } from "../context/bmi_context";

function Button() {
    const { setBmi, height, weight } = useBmi();

    const calculateBmi = (e) => {
        e.preventDefault();

        const parsedWeight = parseFloat(weight);
        const parsedHeight = parseFloat(height);

        if (parsedWeight > 0 && parsedHeight > 0) {
            const result = (parsedWeight / (parsedHeight * parsedHeight))
                .toFixed(2);
            setBmi(result);
        } else {
            setBmi("Invalid input");
        }
    };

    return (
        <button
            onClick={calculateBmi}
            type="submit"
            className="w-full py-2.5 px-4 bg-[#3B62EC] hover:bg-[#2d52d9] active:bg-[#2345bd] text-white font-medium rounded-md shadow-sm text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
        >
            Submit
        </button>
    );
}

export default Button;
