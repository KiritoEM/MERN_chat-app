import ChatAddContent from "@/components/addFriend/ChatAddContent";
import ChatContent from "@/components/Home/ChatContent";
import ChatFriendList from "@/components/addFriend/ChatFriendList";
import ChatList from "@/components/Home/ChatList";
import MetaTitle from "@/components/MetaTitle";
import { Fragment } from "react";

const AddFriend = (): JSX.Element => {
  return (
    <Fragment>
      <MetaTitle title="Let's Chat - Ajouter ami" />
      <section id="chat-addfriend">
        <ChatFriendList />
        <ChatAddContent />
      </section>
    </Fragment>
  );
};

export default AddFriend;
