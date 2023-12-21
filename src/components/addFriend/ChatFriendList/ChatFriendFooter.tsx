import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChatFriendFooter = (): JSX.Element => {
  return (
    <div className="section-footer">
      <a href="/accueil" className="a">
        {" "}
        <button className="btn">
          <FontAwesomeIcon icon={faCommentDots} className="mx-2" /> Voir le Chat
        </button>
      </a>
    </div>
  );
};

export default ChatFriendFooter;
