import { Avatar } from "@material-ui/core";
import React from "react";
import "./Comments.css";

function Comments({ profileImg, timestamp, message, username }) {
  return (
    <div className="comment">
      <div className="comment__top">
        <Avatar src={profileImg} className="comment__avatar" />
        <div className="comment__info">
          <h5>{username}</h5>
          <p>{message}</p>
        </div>

        <div className="comment__date">
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
