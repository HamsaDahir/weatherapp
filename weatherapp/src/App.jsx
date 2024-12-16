import Header from "./components/Header";
import Search from "./components/Search";
import WeatherData from "./components/WeatherData";
import { useEffect, useReducer, useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState();

  return (
    <>
      <div>
        <Header />
        <Search setWeatherData={setWeatherData} />

        <WeatherData weatherData={weatherData} />
      </div>
    </>
  );
}

export default App;
