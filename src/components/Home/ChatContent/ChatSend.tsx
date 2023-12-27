import ChatHelper from "@/helper/ChatHelper";
import { useChat } from "@/hooks/useChat";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Iprops {
  ID: string;
}

const ChatSend: React.FC<Iprops> = ({ ID }): JSX.Element => {
  const { postMessages } = ChatHelper();
  const { userID } = useChat();
  return (
    <div className="section-send">
      <form
        action="post"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          postMessages(ID, userID, e);
          let form = e.currentTarget;
          form["content"].value = "";
        }}
      >
        <div className="input">
          <input
            type="text"
            name="content"
            id=""
            placeholder="Entrez votre message...."
          />
        </div>
        <div className="button">
          <button type="submit" className="btn">
            <FontAwesomeIcon icon={faPaperPlane} id="icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatSend;
