import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChatSend = (): JSX.Element => {
  return (
    <div className="section-send">
      <div className="input">
        <input type="text" name="" id="" placeholder="Entrez votre message...."/>
      </div>
      <div className="button">
          <FontAwesomeIcon icon={faPaperPlane} id="icon"/>
      </div>
    </div>
  );
};

export default ChatSend;
