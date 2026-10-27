import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ResultBox from "./components/ResultBox";
import { CurrencyContextProvider } from "./contexts/currency_context";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [to, setTo] = useState("usd");
  const [from, setFrom] = useState("inr");

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json",
    ).then((res) => res.json()).then((data) => {
      const options = data.usd;
      setCurrencyOptions(Object.keys(options));
    });
  }, []);

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`,
    )
      .then((res) => res.json())
      .then((data) => {
        setConvertedAmount(amount * data[from][to]);
      });
  }, [amount, to, from]);

  return (
    <CurrencyContextProvider
      value={{ currencyOptions, convertedAmount, setAmount, setFrom, setTo }}
    >
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 w-full max-w-2xl">
          {/* Header Icon & Title */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="text-teal-600">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              Currency Converter
            </h1>
          </div>

          <Form />
          <ResultBox />
        </div>
      </div>
    </CurrencyContextProvider>
  );
}

export default App;
