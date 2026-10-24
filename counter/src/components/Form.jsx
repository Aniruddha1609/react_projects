import React from "react";
import { Button } from "./index";

function Form() {
    return (
        <form className="space-y-4">
            <div className="flex gap-4">
                <Button attribute={"+"} />
                <Button attribute={"-"} />
            </div>
        </form>
    );
}

export default Form;
