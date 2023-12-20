import ChatContentHeader from "./ChatContent/ChatContentHeader";
import ChatContentMessages from "./ChatContent/ChatContentMessages";

const ChatContent = (): JSX.Element => {
  return (
    <section id="chat-content">
      <ChatContentHeader />
      <ChatContentMessages />
    </section>
  );
};

export default ChatContent;
