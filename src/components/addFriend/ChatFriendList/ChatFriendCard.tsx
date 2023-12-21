import React from "react";

type IfriendCard = {
  _id?: string | null;
  username: string | null;
};

const ChatFriendCard: React.FC<IfriendCard> = ({
  _id,
  username,
}): JSX.Element => {
  return (
    <div className="friend-card">
      <div className="profile-pictures">
        <img src="/images/hiro.jpeg" alt="" />
      </div>
      <div className="user-info">
        <div className="username">
          <h5>{username}</h5>
        </div>
        <div className="add-btn">
          <button className="btn">Ajouter</button>
        </div>
      </div>
    </div>
  );
};

export default ChatFriendCard;
