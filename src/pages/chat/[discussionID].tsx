  import ChatContent from "@/components/Home/ChatContent";
  import ChatList from "@/components/Home/ChatList";
  import MetaTitle from "@/components/MetaTitle";
  import ChatHelper from "@/helper/ChatHelper";
  import { useChat } from "@/hooks/useChat";
  import { useRouter } from "next/router";
  import { Fragment, useCallback, useEffect, useState } from "react";

  interface Iauthor {
    _id: string;
    username: string;
  }

  interface Imessages {
    _id: string;
    author: Iauthor[];
    content: string;
  }

  const Chat = (): JSX.Element => {
    const router = useRouter();
    const { discussionID } = router.query || {};
    const { getMessages } = ChatHelper();
    const [messages, setMessages] = useState<Imessages[]>([]);
    console.log(discussionID);

    const getMessage = useCallback(async (discussionID: string) => {
      try {
        let message = await getMessages(discussionID);
        setMessages(message);
      } catch (err) {
        console.error(err);
      }
    }, []);

    useEffect(() => {
      getMessage(discussionID as string);
    }, [discussionID]);

    return (
      <Fragment>
        <MetaTitle title="Let's Chat - Chat" />
        <section id="chat-home">
          <ChatList />
          {messages && (
            <ChatContent props={messages} discussionID={discussionID} />
          )}
        </section>
      </Fragment>
    );
  };

  export default Chat;
