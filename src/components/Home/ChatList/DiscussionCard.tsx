import { useRouter } from "next/router";

interface IdiscussionCard {
  _id: string;
  users: Iusers[];
  messages: Imessages[] | Imessages;
  action: () => void;
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
  action,
}): JSX.Element => {
  const router = useRouter();

  const messagesArray = Array.isArray(messages) ? messages : [messages];

  // Inverser l'ordre d'affichage des messages
  const reversedMessages =
    messagesArray.length > 0 ? [...messagesArray].reverse() : [];

  return (
    <div
      className={`discussion ${
        router.asPath === `/chat/${_id}` ? "discussion-active" : ""
      }`}
      onClick={action}
    >
      <div className="user-pictures">
        <img src="/images/hiro.jpeg" alt="" />
      </div>
      <div className="user-info">
        <div className="name">
          {users &&
            users.map((item, index) => <h5 key={index}>{item.username}</h5>)}
        </div>
        <div className="message">
          {reversedMessages.length === 0 ? (
            <p>Bienvenue à vous deux sur Let's Chat</p>
          ) : (
            <p>{reversedMessages && reversedMessages[0]?.content}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscussionCard;
