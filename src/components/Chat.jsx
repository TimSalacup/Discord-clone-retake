import React, { useEffect, useRef, useState } from "react";
import { selectChannelId, selectChannelName } from "../features/channelSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import {
  BellIcon,
  ChatIcon,
  HashtagIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  UsersIcon,
  EmojiHappyIcon,
  GiftIcon,
  PlusCircleIcon,
} from "@heroicons/react/solid";
import { auth, db } from "../firebase/init";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  addDoc,
  collection,
  doc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import Message from "./Message";

function Chat() {
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [user] = useAuthState(auth);
  const inputRef = useRef("");
  const chatRef = useRef(null);
  const [messages] = useCollection(
    channelId &&
      query(
        collection(db, "channels", channelId, "messages"),
        orderBy("timestamp", "asc")
      )
  );

  function notImplemented(e) {
    e.preventDefault();
    alert("Haven't got around to doing this")
  }

  const scrollToBottom = () => {
    chatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  async function sendMessage(e) {
    e.preventDefault();

    if (inputRef.current.value.trim() !== "") {
      const docRef = doc(db, "channels", channelId);
      const messagesRef = collection(docRef, "messages");
      await addDoc(messagesRef, {
        timestamp: serverTimestamp(),
        message: inputRef.current.value,
        name: user?.displayName,
        photoURL: user?.photoURL,
        email: user?.email,
      });
    }

    inputRef.current.value = "";
    scrollToBottom();
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between space-x-5 border-b border-gray-800 p-4 -mt-1">
        <div
          className="flex items-center space-x-1"
          // onClick={}
        >
          <HashtagIcon className="h-6 text-[#72767d]" />
          <h4 className="text-white font-semibold">{channelName}</h4>
        </div>
        <div className="flex space-x-3">
          <BellIcon className="icon cursor-not-allowed" />
          <ChatIcon className="icon cursor-not-allowed" />
          <UsersIcon className="icon cursor-not-allowed" />
          <div className="flex bg-[#202225] text-xs p-1 rounded-md">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent focus:outline-none text-white pl-1 placeholder-[#72767d] cursor-not-allowed"
              onKeyDown={notImplemented}
            />
            <SearchIcon className="h-4 text-[#72767d] mr-1" />
          </div>
          <InboxIcon className="icon" />
          <QuestionMarkCircleIcon className="icon" />
        </div>
      </header>
      <main className="flex-grow overflow-y-scroll scrollbar-hide">
        {messages?.docs.map((doc) => {
          const { message, timestamp, name, photoURL, email } = doc.data();

          return (
            <Message
              key={doc.id}
              id={doc.id}
              message={message}
              timestamp={timestamp}
              name={name}
              email={email}
              photoURL={photoURL}
            />
          );
        })}
        <div ref={chatRef} className="pb-1" />
      </main>
      <div className="flex items-center p-2.5 bg-[#40444b] mx-5 mb-7 rounded-lg">
        <PlusCircleIcon className="icon mr-4 cursor-not-allowed" />
        <form className="flex-grow">
          <input
            ref={inputRef}
            type="text"
            disabled={!channelId}
            placeholder={
              channelId ? `Message #${channelName}` : `Select a channel`
            }
            className="bg-transparent text-[#dcddde] focus:outline-none w-full placeholder-[#72767d] text-sm"
          />
          <button hidden type="submit" onClick={sendMessage}>
            Send
          </button>
        </form>
        <GiftIcon className="icon mr-2 cursor-not-allowed" />
        <EmojiHappyIcon className="icon cursor-not-allowed" />
      </div>
    </div>
  );
}

export default Chat;
