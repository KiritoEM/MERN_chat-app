import React from "react";
import { useChat } from "@/hooks/useChat";

interface IProps {
  messages: Imessages[];
}

interface Imessages {
  _id: string;
  author: any[];
  content: string;
}

const ChatContentMessages: React.FC<IProps> = ({ messages }): JSX.Element => {
  const { userID } = useChat();
  return (
    <div className="section-messages mt-5">
      {messages.map((item, index) => (
        <div  
          className={item.author._id === userID ? "chat-2" : "chat-1"}
          key={index}
        >
          <div className="content">
            <div className={`profile-picture ${item.author._id ===userID ? "d-none" : ""}`}>
              <img src="/images/hiro.jpeg" alt="" />
            </div>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatContentMessages;
