import ChatContentHeader from "./ChatContent/ChatContentHeader";
import ChatContentMessages from "./ChatContent/ChatContentMessages";
import ChatSend from "./ChatContent/ChatSend";

const ChatContent = (): JSX.Element => {
  return (
    <section id="chat-content">
      <ChatContentHeader />
      <ChatContentMessages />
      <ChatSend />
    </section>
  );
};

export default ChatContent;
