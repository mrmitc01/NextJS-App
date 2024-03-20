/*import { createContext, useContext, useState } from 'react';

type LoginContextType = "loggedIn" | "loggedOut";
const AuthContext = createContext<LoginContextType>("loggedOut");

export const AuthProvider = ({ children }:any) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);*/