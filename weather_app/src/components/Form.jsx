import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form() {
    return (
        <form className="w-full mt-6">
            <div className="flex rounded-lg overflow-hidden shadow-md bg-white/10 backdrop-blur-md p-1">
                <Input />
                <Button />
            </div>
        </form>
    );
}

export default Form;
