import ChatContent from "@/components/Home/ChatContent";
import ChatList from "@/components/Home/ChatList";
import MetaTitle from "@/components/MetaTitle";
import { Fragment } from "react";

const Chat = (): JSX.Element => {
  return (
    <Fragment>
      <MetaTitle title="Let's Chat - Chat" />
      <section id="chat-home">
        <ChatList />
        <ChatContent />
      </section>
    </Fragment>
  );
};

export default Chat;
