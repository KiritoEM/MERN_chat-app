import axios from "axios";
import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useToken } from "./useToken";

export interface IChatContext {
  getAllUser: () => void;
  user: IuserArray[];
}

interface IuserArray {
  _id: string;
  username: string;
}

interface IChatProvider {
  children?: ReactNode;
}

const ChatContext = createContext<IChatContext | null>(null);

export const ChatProvider: React.FC<IChatProvider> = ({ children }) => {
  const { getToken } = useToken();
  const [user, setUser] = useState<IuserArray[]>([]);

  //récupère tous les utilisateurs
  const getAllUser = async () => {
    try {
      const token = getToken();
      if (!token) {
        console.error("Token not available");
        return;
      }
      let response = await axios.get(
        `http://localhost:8000/chat/all-user/${token}`
      );
      console.log(response.data);
      setUser(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <ChatContext.Provider
      value={{
        user,
        getAllUser,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

//chat hooks exportation
export const useChat = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat must be used within an AppProvider");
  }
  return context;
};
