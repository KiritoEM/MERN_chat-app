import { useChat } from "@/hooks/useChat";

const ChatContentHeader = (): JSX.Element => {
  const { discussions } = useChat();
  if (discussions) {
    console.log("messages : ", discussions);
  }
  return (
    <div className="section-header">
      <div className="user-info">
        <div className="profile-picture">
          <img src="/images/hiro.jpeg" alt="" />
        </div>
        <div className="profile-content">
          {discussions.map((item, index) => (
            <div className="username" key={index}>
              {item.users.map((item, index) => (
                <h5 key={index}>{item.username}</h5>
              ))}
            </div>
          ))}
          <div className="status">
            <p>En ligne</p>
          </div>
        </div>
      </div>
      <div className="options">
        <img src="/images/info-icon.png" alt="" />
      </div>
    </div>
  );
};

export default ChatContentHeader;
