import React from "react";

interface IdiscussionCard {
  _id: string;
  users: Iusers[];
  messages: Imessages[];
}

interface Iusers {
  _id: string;
  username: string;
}

interface Imessages {
  _id: string;
  content: string;
}

const DiscussionCard: React.FC<IdiscussionCard> = ({
  _id,
  users,
  messages,
}): JSX.Element => {
  return (
    <div className="discussion">
      <div className="user-pictures">
        <img src="/images/hiro.jpeg" alt="" />
      </div>
      <div className="user-info">
        <div className="name">
          {users.map((item, index) => (
            <h5 key={index}>{item.username}</h5>
          ))}
        </div>
        <div className="message">
          {messages.length === 0 ? (
            <p>Bienvenue à vous deux sur Let's Chat</p>
          ) : (
            messages.map((item, index) => <p key={index}>{item.content}</p>)
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscussionCard;
