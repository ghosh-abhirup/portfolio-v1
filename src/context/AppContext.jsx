import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (document.documentElement.getAttribute("data-theme") == null) {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const changeTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <AppContext.Provider value={{ theme, setTheme, changeTheme }}>
      {children}
    </AppContext.Provider>
  );
};
