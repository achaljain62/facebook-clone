import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Comments from "./Comments";
import CommentSender from "./CommentSender";
import db from "./firebase";

function Post({ id, userImg, image, timestamp, message, username }) {
  const [click, setClick] = useState(false);
  const [comments, setcomment] = useState([]);
  useEffect(() => {
    db.collection("comments")
      .orderBy("timestamp", "asc")
      .where("postKey", "==", `${id}`)
      .onSnapshot((snapshot) =>
        setcomment(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);

  const handleChange = () => setClick(!click);
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={userImg} className="post__avatar" />

        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option" onClick={handleChange}>
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>

      <div className={click ? "comments" : "comments__none"}>
        {comments.map((comment) => (
          <Comments
            key={comment.id}
            postKey={comment.data.postKey}
            profileImg={comment.data.profileImg}
            message={comment.data.message}
            timestamp={comment.data.timestamp}
            username={comment.data.username}
            image={comment.data.image}
          />
        ))}
        <CommentSender postKey={id} />
      </div>
    </div>
  );
}

export default Post;
