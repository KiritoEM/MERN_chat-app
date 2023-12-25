import MetaTitle from "@/components/MetaTitle";
import { Fragment } from "react";
import ChatList from "@/components/Home/ChatList";
import ChatContent from "@/components/Home/ChatContent";
import ChatContentdefault from "@/components/Home/chatContentDefault";

const Home = (): JSX.Element => {
  return (
    <Fragment>
      <MetaTitle title="Let's Chat - Chat" />
      <section id="chat-home">
        <ChatList />
        <ChatContentdefault />
      </section>
    </Fragment>
  );
};

export default Home;
