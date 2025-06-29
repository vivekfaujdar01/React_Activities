# 🌤️ Weather App using React + Vite

A simple and elegant weather app built using React.js and Vite. It fetches real-time weather data from the OpenWeatherMap API and displays current weather information like temperature, humidity, wind speed, and more. Responsive design with dynamic backgrounds and loading indicators makes it a clean, modern user experience.

---

## 🚀 Features

- 🔍 Search by **city name** or **ZIP code**
- 🌐 Real-time data from **OpenWeatherMap API**
- 🌡️ Displays temperature, humidity, wind speed, and "feels like"
- ⏳ Shows a **loading spinner** while fetching data
- 📱 **Responsive design** with mobile support
- 🎨 **Dynamic background changes** based on weather (e.g., sunny, rainy, cloudy)
- 🌡️ Toggle units (°C / °F)
- 🧠 Error handling for bad inputs or network failures
---
🌐 Live Demo 
https://weather-app-q2m2.vercel.app/

## 🛠️ Tech Stack

| Technology   | Role                                 |
|--------------|--------------------------------------|
| React.js     | Frontend framework                   |
| Vite         | Fast development build tool          |
| Axios        | API request handling                 |
| OpenWeatherMap | Weather API provider               |
| CSS / Tailwind (optional) | Styling                 |
| React Hooks  | useState, useEffect for logic        |

---

## 📁 Folder Structure

weather-app/
├── public/
├── src/
│ ├── components/ # Reusable components (WeatherCard, Spinner, etc.)
│ ├── App.jsx
│ ├── main.jsx
│ ├── styles.css
├── .env # VITE_WEATHER_API_KEY goes here
├── index.html
├── package.json
└── README.md

---
⚠️ This key is still exposed in frontend, so avoid using sensitive or paid API keys.


## 🔐 Environment Variable

Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key

---

## 📦 Getting Started

1. Clone the repository
git clone https://github.com/your-username/weather-app.git
cd weather-app
2. Install dependencies
npm install
3. Add API key in .env file
VITE_WEATHER_API_KEY=your_openweathermap_api_key
4. Run the app locally
npm run dev
App will run at: http://localhost:5173

---
