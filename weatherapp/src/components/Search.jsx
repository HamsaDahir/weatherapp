import { useReducer, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = import.meta.env.VITE_SECRETS;

export default function Search({ setWeatherData }) {
  const [city, setCity] = useState("");

  async function fetchData() {
    const response = await fetch(
      `${URL}q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    setWeatherData(data);
  }
  return (
    <div className={styles.container}>
      <h1>WATHER</h1>{" "}
      <div className={styles.inputContainer}>
        <input
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="City Name"
        />
        <button onClick={fetchData} className={styles.searchButton}>
          <img src="../image/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}
