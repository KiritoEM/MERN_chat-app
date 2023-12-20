import React, { ReactNode, createContext, useContext, useState } from "react";

export interface ITokenContext {
  setLocalToken: (e: string) => void;
  getToken: () => string | null;
  clearToken: () => void;
}

interface ITokenProvider {
  children?: ReactNode;
}

const TokenContext = createContext<ITokenContext | null>(null);

export const TokenProvider: React.FC<ITokenProvider> = ({ children }) => {
  const [token, setToken] = useState<any>(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      return storedToken;
    }

    return null;
  });

  const setLocalToken = (token: string) => {
    localStorage.setItem("token", token);
    setToken(String);
  };

  const getToken = () => {
    return token;
  };

  const clearToken = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <TokenContext.Provider
      value={{
        setLocalToken,
        getToken,
        clearToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};
//hooks exportation
export const useToken = () => {
  const context = useContext(TokenContext);

  if (!context) {
    throw new Error("useToken must be used within an AppProvider");
  }
  return context;
};
