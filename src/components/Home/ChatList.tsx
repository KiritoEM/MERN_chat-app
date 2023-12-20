import DiscussionCard from "./ChatList/DiscussionCard";
import ChatListHeader from "./ChatList/ChatListHeader";

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
    </section>
  );
};

export default ChatList;
