import React from "react";
import chatHelper from "@/helper/ChatHelper"; 

type IfriendCard = {
  _id?: string;
  username: string | null;
};

const ChatFriendCard: React.FC<IfriendCard> = ({
  _id,
  username,
}): JSX.Element => {
  const { addFriend } = chatHelper(); 
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
          <button
            className="btn"
            onClick={() => {
              _id ? addFriend(_id) : "";
            }}
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatFriendCard;
