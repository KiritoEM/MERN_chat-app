import { useChat } from "@/hooks/useChat";
import { useEffect } from "react";

interface IidProps {
  ID: string;
}

const ChatContentHeader: React.FC<IidProps> = ({ ID }): JSX.Element => {
  const { discussion, getDiscussionsById } = useChat();

  if (ID) {
    console.log("ID depuis props : ", ID);
  }

  if (discussion) {
    console.log(discussion);
  }

  useEffect(() => {
    getDiscussionsById(ID);
  }, [ID]);

  return (
    <div className="section-header">
      <div className="user-info">
        <div className="profile-picture">
          <img src="/images/hiro.jpeg" alt="" />
        </div>
        <div className="profile-content">
          {Array.isArray(discussion) &&
            discussion.map((item, index) => (
              <div className="username" key={index}>
                {Array.isArray(item.users) &&
                  item.users.map((user, userIndex) => (
                    <h5 key={userIndex}>{user.username}</h5>
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
