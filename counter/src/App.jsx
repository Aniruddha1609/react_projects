import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import { CounterProvider } from "./contexts/counter_context";

function App() {
  const [counter, setCounter] = useState(0);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <CounterProvider value={{ counter, setCounter }}>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8 w-full max-w-sm relative">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 "
            onClick={handleRefresh}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>

          <div className="w-full h-64 bg-gradient-to-b from-yellow-300 to-lime-300 rounded-2xl flex items-center justify-center relative mb-6">
            <span className="text-black text-4xl font-bold px-3 py-1">
              {counter}
            </span>
          </div>
          <Form />
        </div>
      </div>
    </CounterProvider>
  );
}

export default App;
