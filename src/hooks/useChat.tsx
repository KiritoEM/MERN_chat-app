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
  import socket from "@/helper/socket";

  let ID: string;

  export interface IChatContext {
    getAllUser: () => void;
    fetchCurrentUser: () => void;
    getMessages: (discussionID: string) => void;
    getDiscussions: () => void;
    getDiscussionsById: (id: string) => void;
    setLocalID: (ID: string) => void;
    getCurrentUser: () => void;
    user: IuserArray[];
    userID: any;
    discussions: IdiscussionCard[];
    discussion: IdiscussionCard[];
    currentUser: TCurrentUser[];
    messages: Imessages[];
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

  interface Imessages {
    _id: string;
    author: Iauthor[];
    content: string;
  }

  interface IdiscussionCard {
    _id: string;
    users: Iusers[];
    messages: Imessages[];
  }

  interface Iusers {
    _id: string;
    username: string;
  }

  interface Iauthor {
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
    const [currentUser, setCurrentUser] = useState<TCurrentUser[]>([]);
    const [discussions, setDiscussions] = useState<IdiscussionCard[]>([]);
    const [discussion, setDiscussion] = useState<IdiscussionCard[]>([]);
    const [userID, setID] = useState<any>(() => {
      if (typeof window !== "undefined") {
        const storeduserID = localStorage.getItem("userID");
        return storeduserID;
      }

      return null;
    });
    const [messages, setMessages] = useState<Imessages[]>([]);

    const setLocalID = (userID: string) => {
      localStorage.setItem("userID", userID);
      setID(String);
    };

    const getCurrentUser = () => {
      return userID;
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
        console.log("discussions :", response.data);
        setDiscussions(response.data);

        socket.on("discussions", (updatedDiscussions) => {
          setDiscussions(updatedDiscussions);
        });

        socket.on("newDiscussion", (newDiscussion) => {
          setDiscussions(newDiscussion);
        });

        return () => {
          socket.disconnect();
        };
      } catch (err) {
        console.error(err);
      }
    };

    const getDiscussionsById = async (discussionID: string) => {
      try {
        console.log("Discussion ID:", discussionID);
        if (userID) {
          ID = userID;
        }
        let response = await axios.get(
          `http://localhost:8000/chat/get-discussions-id/${discussionID}/${ID}`
        );
        console.log("discussion by ID :", response.data.data);
        setDiscussion(response.data.data);

        socket.on("discussions", (updatedDiscussions) => {
          setDiscussion(updatedDiscussions);
        });

        socket.on("newDiscussion", (newDiscussion) => {
          setDiscussion(newDiscussion);
        });

        return () => {
          socket.disconnect();
        };
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

    const getMessages = useCallback(async (discussionID: string) => {
      try {
        let response = await axios.get(
          `http://localhost:8000/chat/get-chat/${discussionID}`
        );
        setMessages(response.data);
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }, []);

    const getConnectedDate = async () => {
      socket.on("update-users", ({ type, userID, disconnectedAt }) => {
        if (type === "disconnect") {
          const disconnectedAtDate = new Date(disconnectedAt);
          const timeSinceDisconnect = Math.floor(
            (new Date().getTime() - disconnectedAtDate.getTime()) / (1000 * 60)
          );
          console.log(
            `Utilisateur déconnecté : ${userID}, Déconnexion il y a : ${timeSinceDisconnect} minutes`
          );
        }
      });

      socket.emit("user-connected");

      return () => {
        socket.disconnect();
      };
    };

    useEffect(() => {
      getAllUser();
      fetchCurrentUser();
      getDiscussions();
      getConnectedDate();
    }, []);

    return (
      <ChatContext.Provider
        value={{
          user,
          userID,
          messages,
          getAllUser,
          fetchCurrentUser,
          currentUser,
          getDiscussions,
          getDiscussionsById,
          discussions,
          discussion,
          setLocalID,
          getMessages,
          getCurrentUser,
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
