import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";

function Story({ image, userImg, username }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={userImg} />
      <h4>{username}</h4>
    </div>
  );
}

export default Story;
