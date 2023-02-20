import { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

const useAlert = () => {
  return useContext(AlertContext);
};

const AlertProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleAlert = () => {
    setIsVisible((prev) => !prev);
  };

  const value = {
    isVisible,
    handleToggleAlert,
  };

  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

export { AlertContext, AlertProvider, useAlert };
