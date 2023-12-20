const ChatListHeader = (): JSX.Element => {
  return (
    <div className="section-header">
      <div className="header-logo">
        {" "}
        <img src="/logo-white.png" alt="" />
      </div>
      <div className="profile">
        <img src="/images/hiro.jpeg" alt="" />
      </div>
    </div>
  );
};

export default ChatListHeader;
