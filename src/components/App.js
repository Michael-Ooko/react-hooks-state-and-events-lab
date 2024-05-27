import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Step 1: Create a state variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: Toggle dark mode state
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Step 3: Update className based on dark mode state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Step 4: Add event handler to button */}
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
