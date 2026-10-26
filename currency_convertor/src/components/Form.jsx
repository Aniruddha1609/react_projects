import React from "react";
import Input from "./Input";
import Dropdown from "./Dropdown";

function Form() {
    return (
        <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input />
                <Dropdown />
                <Dropdown />
            </div>
        </form>
    );
}

export default Form;
