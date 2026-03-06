import { createContext, useState, useContext } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [user] = useState({
    name: "Ashmit",
    role: "AIML Engineer & Full Stack Developer",
    avatar: "AT",
  });

  return (
    <AppContext.Provider value={{ user }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}