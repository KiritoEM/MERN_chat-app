import ChatFriendFooter from "./ChatFriendList/ChatFriendFooter";
import ChatListHeader from "../Home/ChatList/ChatListHeader";
import ChatFriendCard from "./ChatFriendList/ChatFriendCard";
import { useChat } from "@/hooks/useChat";

const ChatFriendList = (): JSX.Element => {
  const { user } = useChat();

  if (user) {
    console.log("all user", user);
  }
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
