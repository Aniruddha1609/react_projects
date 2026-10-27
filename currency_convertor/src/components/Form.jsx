import React from "react";
import Input from "./Input";
import Dropdown from "./Dropdown";
import { useCurrency } from "../contexts/currency_context";

function Form() {
    const { setFrom, setTo } = useCurrency();
    return (
        <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input />
                <Dropdown setExcangePos={setFrom} />
                <Dropdown setExcangePos={setTo} />
            </div>
        </form>
    );
}

export default Form;
