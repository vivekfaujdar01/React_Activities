import { useState } from "react";

function WeatherInput({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 justify-center mt-6">
      <input
        type="text"
        placeholder="Enter city, ZIP or lat,lng (e.g. Delhi or 110001 or 28.61,77.21)"
        className="border border-gray-300 rounded px-4 py-2 w-2/3 sm:w-1/2"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default WeatherInput;
// This component is a form for entering a city name to search for weather data.
// It uses the `useState` hook to manage the input value.
// When the form is submitted, it calls the `onSearch` function passed as a prop
// with the city name, and resets the input field.
// The input field has a placeholder text "Enter city name" and is styled with Tailwind CSS classes.
// The button is styled to have a blue background and white text, with a hover effect that darkens the background color.
// The form is centered and responsive, adjusting the width of the input field based on the screen size.
