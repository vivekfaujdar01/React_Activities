import { useState } from "react";
import ThemeContext from "./ThemeContext";
import Header from "./Header";
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`min-h-screen w-screen flex flex-col items-center justify-center transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <Header />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
