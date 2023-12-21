import axios from "axios";
import { useChat } from "@/hooks/useChat";

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

  return { addFriend };
}