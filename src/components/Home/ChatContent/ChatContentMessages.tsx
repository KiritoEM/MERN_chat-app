import { useChat } from "@/hooks/useChat";

const ChatContentMessages = (): JSX.Element => {
  const { messages } = useChat();

  return (
    <div className="section-messages mt-5">
      {messages.map((item, index) => (
        <div className="chat-1" key={index}>
          <div className="content">
            <div className="profile-picture">
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
