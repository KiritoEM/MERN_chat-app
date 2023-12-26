import DiscussionCard from "./ChatList/DiscussionCard";
import ChatListHeader from "./ChatList/ChatListHeader";
import ChatListFooter from "./ChatList/ChatListFooter";
import { useChat } from "@/hooks/useChat";
import { useRouter } from "next/router";
import socket from "@/helper/socket";
import React, { useCallback, useEffect, useState } from "react";

interface Iprops {
  ID: string;
}

interface Iauthor {
  _id: string;
  username: string;
}

interface Imessages {
  _id: string;
  author: Iauthor[];
  content: string;
}

const ChatList: React.FC<Iprops> = ({ ID }): JSX.Element => {
  const { discussions } = useChat();
  const router = useRouter();

  return (
    <section id="chat-list">
      <ChatListHeader />

      <div className="section-list">
        {discussions.map((item, index) => (
          <a href={`/chat/${item._id}`} key={index}>
            <DiscussionCard
              {...item}
              action={() => {
                router.push(`/chat/${item._id}`);
              }}
            />
          </a>
        ))}
      </div>

      <ChatListFooter />
    </section>
  );
};

export default ChatList;
