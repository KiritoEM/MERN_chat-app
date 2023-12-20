import DiscussionCard from "./ChatList/DiscussionCard";

const ChatList = (): JSX.Element => {
  return (
    <section id="chat-list">
      <div className="section-logo">
        <img src="/logo-white.png" alt="" />
      </div>
      <div className="section-list">
        <DiscussionCard />
        <DiscussionCard />
        <DiscussionCard />
      </div>
    </section>
  );
};

export default ChatList;
