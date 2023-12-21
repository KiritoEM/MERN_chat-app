import React, { useState } from "react";
import chatHelper from "@/helper/ChatHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

type IfriendCard = {
  _id?: string;
  username: string | null;
};

const ChatFriendCard: React.FC<IfriendCard> = ({
  _id,
  username,
}): JSX.Element => {
  const { addFriend } = chatHelper();
  const [add, setAdded] = useState<boolean>(false);
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
          {add ? (
            <button className="btn" id="btn-1">
              Ajouté(e) <FontAwesomeIcon icon={faCheck} className="mx-1" />
            </button>
          ) : (
            <button
              className="btn"
              onClick={() => {
                _id ? addFriend(_id) : "";
                setAdded(true);
              }}
              id="btn-2"
            >
              Ajouter
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatFriendCard;
