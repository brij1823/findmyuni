import React, { useRef, useState } from "react";
import "./Chat.css";
import firebase from "firebase/compat/app";
import CenteredButtons from "../components/CenteredButtons";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDURWm087oN3mEWBg4JVFDB_zpwYZyOdJ4",
  authDomain: "findmyuni-d00a1.firebaseapp.com",
  projectId: "findmyuni-d00a1",
  storageBucket: "findmyuni-d00a1.appspot.com",
  messagingSenderId: "1018896438995",
  appId: "1:1018896438995:web:0d9b7d93c269721e08a626",
  measurementId: "G-6NLRH8FVSV",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

const Chat = ({ item }) => {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    // const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      // uid,
      // photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    // const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
    const messageClass = true ? "sent" : "received";

    return (
      <>
        <div className={`message ${messageClass}`}>
          <img
            src={
              photoURL ||
              "https://api.adorable.io/avatars/23/abott@adorable.png"
            }
          />
          <p>{text}</p>
        </div>
      </>
    );
  }

  return (
    <div className="w-full h-full p-4 bg-gray-200 overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Chat with </h2>
        <CenteredButtons className="px-4 py-2 bg-blue-500 text-white rounded">
          Book Zoom Meeting
        </CenteredButtons>
      </div>
      <>
        <main>
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
          <span ref={dummy}></span>
        </main>
        <form onSubmit={sendMessage}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="say something nice"
          />
          <button type="submit" disabled={!formValue}>
            🕊️
          </button>
        </form>
      </>
    </div>
  );
};

export default Chat;
