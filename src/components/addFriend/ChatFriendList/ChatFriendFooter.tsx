import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const ChatFriendFooter = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="section-footer">
      <button
        className="btn"
        onClick={() => {
          router.push("/accueil");
        }}
      >
        <FontAwesomeIcon icon={faCommentDots} className="mx-2" /> Voir le Chat
      </button>
    </div>
  );
};

export default ChatFriendFooter;
