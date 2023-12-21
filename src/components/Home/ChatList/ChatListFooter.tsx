import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChatListFooter = (): JSX.Element => {
  return (
    <div className="section-footer">
      <button className="btn">
        <FontAwesomeIcon icon={faUser} /> Suggestion d' amis
      </button>
    </div>
  );
};

export default ChatListFooter;
