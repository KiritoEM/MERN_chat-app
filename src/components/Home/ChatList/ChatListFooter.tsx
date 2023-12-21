import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const ChatListFooter = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="section-footer">
      <button
        className="btn"
        onClick={() => {
          router.push("/ajoutAmi");
        }}
      >
        <FontAwesomeIcon icon={faUser} className="mx-2" /> Suggestion d' amis
      </button>
    </div>
  );
};

export default ChatListFooter;