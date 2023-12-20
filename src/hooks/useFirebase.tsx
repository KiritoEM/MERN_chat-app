import React, { ReactNode, createContext, useContext, useState } from "react";
import { auth, provider } from "./../config/firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";

export interface IAuthContext {
  setGooglePopup: () => void;
  setLogout: () => void;
  emailSent: string | null;
  setEmailValue: (email: string | null) => void;
}

interface IAuthProvider {
  children?: ReactNode;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [emailSent, sentEmail] = useState<string | null>("");

  //show Google popup
  const setGooglePopup = () => {
    signInWithPopup(auth, provider).then((data) => {
      if (data.user.email) {
        let storage = localStorage.setItem("userEmail", data.user.email);
        sentEmail(data.user.email);
      }
    });
  };

  const setEmailValue = (email: string | null) => {
    if (typeof window !== "undefined") {
      sentEmail(email);
    }
    return email;
  };

  const setLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("userEmail");
    });
  };

  return (
    <AuthContext.Provider
      value={{
        emailSent,
        setGooglePopup,
        setLogout,
        setEmailValue,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//hooks exportation
export const useFirebase = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
