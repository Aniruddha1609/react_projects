import { useEffect, useState } from "react";

import "./App.css";
import { WeatherContextProvider } from "./contexts/weather_context";
import Form from "./components/Form";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const key = import.meta.env.VITE_API_KEY;
  const [location, setLocation] = useState("Delhi");
  const [localtime, setLocaltime] = useState("");
  const [temp, setTemp] = useState("");
  const [condition, setCondition] = useState("");
  const [input, setInput] = useState("");
  const [icon, setIcon] = useState(
    "//cdn.weatherapi.com/weather/64x64/night/113.png",
  );

  useEffect(() => {
    try {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`,
      ).then((res) => res.json()).then((res) => {
        setTemp(res.current.temp_c);
        setLocaltime(res.location.localtime);
        setCondition(res.current.condition.text);
        setIcon(res.current.condition.icon);
        setInput("");
      });
    } catch (error) {
      console.log("Error", error);
    }
  }, [location]);
  return (
    <WeatherContextProvider
      value={{
        location,
        localtime,
        temp,
        condition,
        setLocation,
        input,
        setInput,
      }}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gradient-to-b from-[#4EA8F8] to-[#2B7BE4] rounded-3xl p-6 sm:p-8 w-full max-w-sm text-white flex flex-col items-center justify-between shadow-2xl min-h-[500px]">
          {/* Weather Info Section */}
          <div className="text-center mt-4">
            <p className="text-sm font-medium text-blue-100">{localtime}</p>
            <h1 className="text-3xl font-bold mt-1">{location}</h1>

            <div className="my-6 flex justify-center">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-inner">
                <img src={icon} alt={condition} />
              </div>
            </div>

            <div className="text-5xl font-extrabold tracking-tight">
              {temp}℃
            </div>
            <p className="text-sm font-medium text-blue-100 mt-1">
              {condition}
            </p>
          </div>

          <Form />
        </div>
      </div>
    </WeatherContextProvider>
  );
}

export default App;
