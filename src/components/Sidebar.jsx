import SideRow from "./SideRow";
import React from "react";
import "./Sidebar.css";
import EventIcon from "@material-ui/icons/Event";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <h1>Home</h1>
      <SideRow src={user.photoURL} title={user.displayName} />
      <SideRow Icon={EventIcon} title="Events" />
      <SideRow Icon={SportsEsportsIcon} title="Gaming" />
      <SideRow Icon={LocalHospitalIcon} title="COVID-19 Information Center " />
      <SideRow Icon={EmojiFlagsIcon} title="Pages" />
      <SideRow Icon={PeopleIcon} title="Friends" />
      <SideRow Icon={ChatIcon} title="Messenger" />
      <SideRow Icon={StorefrontIcon} title="Marketplace" />
      <SideRow Icon={VideoLibraryIcon} title="Videos" />
      <SideRow Icon={ExpandMoreOutlinedIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
