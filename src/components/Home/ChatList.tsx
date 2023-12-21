import DiscussionCard from "./ChatList/DiscussionCard";
import ChatListHeader from "./ChatList/ChatListHeader";
import ChatListFooter from "./ChatList/ChatListFooter";

const ChatList = (): JSX.Element => {
  return (
    <section id="chat-list">
      <ChatListHeader />

      <div className="section-list">
        <DiscussionCard />
        <DiscussionCard />
        <DiscussionCard />
        <DiscussionCard />
        <DiscussionCard />
      </div>

      <ChatListFooter />
    </section>
  );
};

export default ChatList;
