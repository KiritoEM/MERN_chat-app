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

let ID: string;

export interface IChatContext {
  getAllUser: () => void;
  fetchCurrentUser: () => void;
  getDiscussions: () => void;
  setLocalID: (ID: string) => void;
  user: IuserArray[];
  discussions: IdiscussionCard[];
  currentUser: TCurrentUser[];
}

interface IuserArray {
  _id: string;
  username: string;
}

type TCurrentUser = {
  _id: string;
  username: string | null;
  email: string;
};

interface IdiscussionCard {
  _id: string;
  users: Iusers[];
  messages: Imessages[];
}

interface Iusers {
  _id: string;
  username: string;
}

interface Imessages {
  _id: string;
  content: string;
}
interface IChatProvider {
  children?: ReactNode;
}

const ChatContext = createContext<IChatContext | null>(null);

export const ChatProvider: React.FC<IChatProvider> = ({ children }) => {
  const { getToken } = useToken();
  const [user, setUser] = useState<IuserArray[]>([]);
  const [currentUser, setCurrentUser] = useState<TCurrentUser[]>([]);
  const [discussions, setDiscussions] = useState<IdiscussionCard[]>([]);
  const [userID, setID] = useState<any>(() => {
    if (typeof window !== "undefined") {
      const storeduserID = localStorage.getItem("userID");
      return storeduserID;
    }

    return null;
  });

  const setLocalID = (userID: string) => {
    localStorage.setItem("userID", userID);
    setID(String);
  };

  //récupère tous les utilisateurs
  const getAllUser = async () => {
    try {
      let token = getToken();
      if (!token) {
        console.error("Token not available");
        return;
      }
      let response = await axios.get(
        `http://localhost:8000/chat/all-user/${token}`
      );
      setUser(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getDiscussions = async () => {
    try {
      if (userID) {
        ID = userID;
      }
      let response = await axios.get(
        `http://localhost:8000/chat/get-discussions/${ID}`
      );
      console.log(response.data);
      setDiscussions(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchCurrentUser = useCallback(async () => {
    let token = getToken();
    if (!token) {
      console.error("Token not available");
      return;
    }
    try {
      let response = await axios.get(
        `http://localhost:8000/chat/fetch-current-user/${token}`
      );
      setCurrentUser(response.data);
      setLocalID(response.data._id);
    } catch (err) {
      console.error(err);
    }
  }, [getToken]);

  useEffect(() => {
    getAllUser();
    fetchCurrentUser();
    getDiscussions();
  }, []);

  return (
    <ChatContext.Provider
      value={{
        user,
        getAllUser,
        fetchCurrentUser,
        currentUser,
        getDiscussions,
        discussions,
        setLocalID,
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
