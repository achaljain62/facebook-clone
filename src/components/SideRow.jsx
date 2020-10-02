import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideRow.css";

function SideRow({ src, Icon, title }) {
  return (
    <div className="sideRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SideRow;
