import MetaTitle from "@/components/MetaTitle";
import { Fragment } from "react";
import ChatList from "@/components/Home/ChatList";
import ChatContent from "@/components/Home/ChatContent";

const Home = (): JSX.Element => {
  return (
    <Fragment>
      <MetaTitle title="Let's Chat" />
      <section id="chat-home">
        <ChatList />
        <ChatContent />
      </section>
    </Fragment>
  );
};

export default Home;
