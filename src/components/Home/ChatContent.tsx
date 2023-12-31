import { useEffect } from "react";
import ChatContentHeader from "./ChatContent/ChatContentHeader";
import ChatContentMessages from "./ChatContent/ChatContentMessages";
import ChatSend from "./ChatContent/ChatSend";

interface Iprops {
  props: any[];
  discussionID: string | undefined | string[];
}

const ChatContent: React.FC<Iprops> = ({
  props,
  discussionID,
}): JSX.Element => {
  return (
    <section id="chat-content">
      <ChatContentHeader ID={discussionID} />
      <ChatContentMessages messages={props} />
      <ChatSend ID={discussionID} />
    </section>
  );
};

export default ChatContent;
