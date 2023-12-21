import ChatFriendFooter from "./ChatFriendList/ChatFriendFooter";
import ChatListHeader from "../Home/ChatList/ChatListHeader";
import ChatFriendCard from "./ChatFriendList/ChatFriendCard";

const ChatFriendList = (): JSX.Element => {
  return (
    <section id="chat-friendlist">
      <ChatListHeader />

      <div className="section-list">
        <ChatFriendCard />
      </div>

      <ChatFriendFooter />
    </section>
  );
};

export default ChatFriendList;
