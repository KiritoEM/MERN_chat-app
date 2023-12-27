import axios from "axios";
import { useChat } from "@/hooks/useChat";
import { useCallback } from "react";

export default function ChatHelper() {
  const { currentUser } = useChat();

  const addFriend = async (friendID: string) => {
    try {
      if (currentUser) {
        const response = await axios.post(
          `http://localhost:8000/chat/${currentUser._id}/addFriend/${friendID}`
        );
        if (response.status === 200) {
          alert("demande envoyé avec succés");
        } else {
          alert("Echec de la demande");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const postMessages = async (
    discussionID: string,
    userID: string,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    try {
      let form = e.currentTarget;
      let content = form["content"].value;
      const response = await axios.post(
        `http://localhost:8000/chat/${userID}/new-message/${discussionID}`,
        {
          content,
        }
      );
      if (response.status === 200) {
        content = "";
      } else {
        alert("Echec de l' envoi du message");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getMessages = useCallback(async (discussionID: string) => {
    try {
      let response = await axios.get(
        `http://localhost:8000/chat/get-chat/${discussionID}`
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }, []);

  return { addFriend, getMessages, postMessages };
}
