import ChatFriendFooter from "./ChatFriendList/ChatFriendFooter";
import ChatListHeader from "../Home/ChatList/ChatListHeader";
import ChatFriendCard from "./ChatFriendList/ChatFriendCard";
import { useChat } from "@/hooks/useChat";

const ChatFriendList = (): JSX.Element => {
  const { user } = useChat();

  return (
    <section id="chat-friendlist">
      <ChatListHeader />

      <div className="section-list">
        {user.length === 0 ? (
          <h5 id="vide">Aucun utilisateur disponible.</h5>
        ) : (
          user.map((item, index) => <ChatFriendCard key={index} {...item} />)
        )}
      </div>

      <ChatFriendFooter />
    </section>
  );
};

export default ChatFriendList;
