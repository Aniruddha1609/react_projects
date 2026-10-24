import { useState } from "react";
import "./App.css";
import { Input } from "./components";
import { BmiProvider } from "./context/bmi_context";
import Button from "./components/Button";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");

  return (
    <BmiProvider value={{ height, weight, setBmi, bmi }}>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-[#2A2D53] text-center mb-6">
            BMI Calculator
          </h1>
          <form id="bmiForm" className="space-y-4">
            <Input attribute={"Weight"} setValue={setWeight} unit={"kg"} />
            <Input attribute={"Height"} setValue={setHeight} unit={"m"} />
            <Button />
            <br />
            <h5 className="text-black text-center">Your BMI : {bmi}</h5>
          </form>
        </div>
      </div>
    </BmiProvider>
  );
}

export default App;
