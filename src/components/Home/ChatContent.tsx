import { useEffect } from "react";
import ChatContentHeader from "./ChatContent/ChatContentHeader";
import ChatContentMessages from "./ChatContent/ChatContentMessages";
import ChatSend from "./ChatContent/ChatSend";
import { useChat } from "@/hooks/useChat";

interface Iprops {
  props: any[];
}

const ChatContent: React.FC<Iprops> = ({ props }): JSX.Element => {
  return (
    <section id="chat-content">
      <ChatContentHeader />
      <ChatContentMessages messages={props} />
      <ChatSend />
    </section>
  );
};

export default ChatContent;
