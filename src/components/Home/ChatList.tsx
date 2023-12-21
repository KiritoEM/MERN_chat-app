import DiscussionCard from "./ChatList/DiscussionCard";
import ChatListHeader from "./ChatList/ChatListHeader";
import ChatListFooter from "./ChatList/ChatListFooter";
import { useChat } from "@/hooks/useChat";

const ChatList = (): JSX.Element => {
  const { discussions } = useChat();
  return (
    <section id="chat-list">
      <ChatListHeader />

      <div className="section-list">
        {discussions.map((item, index) => (
          <DiscussionCard key={index} {...item} />
        ))}
      </div>

      <ChatListFooter />
    </section>
  );
};

export default ChatList;
