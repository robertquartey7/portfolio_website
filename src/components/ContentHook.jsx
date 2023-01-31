import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <GlobalContext.Provider value={{ clicked, setClicked }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const Global = () => {
  return useContext(GlobalContext);
};
