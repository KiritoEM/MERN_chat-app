import DiscussionCard from "./ChatList/DiscussionCard";
import ChatListHeader from "./ChatList/ChatListHeader";
import ChatListFooter from "./ChatList/ChatListFooter";
import { useChat } from "@/hooks/useChat";
import { useRouter } from "next/router";

const ChatList = (): JSX.Element => {
  const { discussions, getMessages } = useChat();
  const router = useRouter();
  return (
    <section id="chat-list">
      <ChatListHeader />

      <div className="section-list">
        {discussions.map((item, index) => (
          <a href={`/chat/${item._id}`}>
            <DiscussionCard
              key={index}
              {...item}
              action={() => {
                router.push(`/chat/${item._id}`)
              }}
            />
          </a>
        ))}
      </div>

      <ChatListFooter />
    </section>
  );
};

export default ChatList;
