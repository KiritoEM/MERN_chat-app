import axios from "axios";
import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

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
  const [user, setUser] = useState<IuserArray[]>([]);

  //recuperer tous les utilisateurs
  const getAllUser = () => {
    useEffect(() => {
      const fetchUser = async () => {
        try {
          let response = await axios.get("http://localhost:8000/chat/all-user");
          console.log(response.data);
          setUser(response.data);
        } catch (err) {
          console.error(err);
        }
      };

      fetchUser();
    }, []);
  };

  getAllUser();

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

//hooks exportation
export const useChat = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat must be used within an AppProvider");
  }
  return context;
};
