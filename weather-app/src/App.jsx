import { useState } from "react";
import WeatherInput from "./components/WeatherInput";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = async (city) => {
    setError("");
    setWeather(null);
    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      const data = await res.json();

      if (data.error) {
        setError(data.error.message);
      } else {
        setWeather(data);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getBackgroundClass = (text) => {
    const t = text.toLowerCase();

    if (t.includes("sunny") || t.includes("clear")) return "from-yellow-100 to-yellow-300";
    if (t.includes("cloud") || t.includes("overcast")) return "from-gray-200 to-gray-400";
    if (t.includes("rain") || t.includes("shower")) return "from-blue-200 to-blue-500";
    if (t.includes("snow")) return "from-slate-100 to-slate-300";

    return "from-blue-500 to-teal-400"; // fallback
  };

  const background = weather
    ? getBackgroundClass(weather.current.condition.text)
    : "from-blue-500 to-teal-400";

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${background} px-4 dark:bg-gray-900`}>
        <div className="w-full max-w-xl bg-white dark:bg-gray-800 dark:text-white rounded-2xl shadow-xl p-6 sm:p-10">
          
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-300">
              Weather App
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-sm px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-600"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          <WeatherInput onSearch={handleSearch} />

          {loading && (
            <div className="text-center mt-4">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Fetching weather...</p>
            </div>
          )}

          {error && (
            <p className="mt-4 text-red-600 text-center font-medium">{error}</p>
          )}

          {weather && (
            <div className="mt-6 text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 dark:text-blue-200">
                {weather.location.name}, {weather.location.country}
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                🕒 Local Time: {weather.location.localtime}
              </p>

              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200">
                {isCelsius
                  ? `${weather.current.temp_c}°C`
                  : `${weather.current.temp_f}°F`}{" "}
                - {weather.current.condition.text}
              </p>

              <img
                src={weather.current.condition.icon}
                alt="weather icon"
                className="mx-auto mt-4 w-20 sm:w-24 animate-bounce"
              />

              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base space-y-1">
                <p>
                  🌡️ Feels Like:{" "}
                  {isCelsius
                    ? `${weather.current.feelslike_c}°C`
                    : `${weather.current.feelslike_f}°F`}
                </p>
                <p>💧 Humidity: {weather.current.humidity}%</p>
                <p>🌬️ Wind: {weather.current.wind_kph} km/h</p>
              </div>

              <button
                onClick={() => setIsCelsius(!isCelsius)}
                className="mt-4 px-4 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Show in {isCelsius ? "°F" : "°C"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
