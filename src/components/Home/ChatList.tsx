import DiscussionCard from "./ChatList/DiscussionCard";

const ChatList = (): JSX.Element => {
  return (
    <section id="chat-list">
      <div className="section-header">
        <div className="header-logo">
          {" "}
          <img src="/logo-white.png" alt="" />
        </div>
        <div className="profile">
          <img src="/images/hiro.jpeg" alt="" />
        </div>
      </div>
      <div className="section-list">
        <DiscussionCard />
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
