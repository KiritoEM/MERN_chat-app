import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const ChatListFooter = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="section-footer">
        <a href="/ajoutAmi" className="a">
        {" "}
        <button className="btn">
        <FontAwesomeIcon icon={faUser} className="mx-2" /> Suggestion d' amis
        </button>
      </a>
    </div>
  );
};

export default ChatListFooter;
