import DiscussionCard from "./ChatList/DiscussionCard";
import ChatListHeader from "./ChatList/ChatListHeader";
import ChatListFooter from "./ChatList/ChatListFooter";
import { useChat } from "@/hooks/useChat";

const ChatList = (): JSX.Element => {
  const { discussions } = useChat();
  const { getMessages } = useChat();
  return (
    <section id="chat-list">
      <ChatListHeader />

      <div className="section-list">
        {discussions.map((item, index) => (
          <a href={`/chat/${item._id}`}>
            <DiscussionCard
              key={index}
              {...item}
              action={() => getMessages(item._id)}
            />
          </a>
        ))}
      </div>

      <ChatListFooter />
    </section>
  );
};

export default ChatList;
