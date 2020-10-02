import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./CommentSender.css";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function CommentSender({ postKey }) {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("comments").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profileImg: user.photoURL,
      username: user.displayName,
      postKey: `${postKey}`,
    });

    setInput("");
  };
  return (
    <div className="commentSender">
      <div className="commentSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="commentSender__input"
            placeholder={`Write a comment, ${user.displayName}?`}
          />
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentSender;
