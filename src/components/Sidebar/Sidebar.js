import React from "react";
import "./Sidebar.css";
import Ashayer from "../../assets/Sidebar_assets/Ashayer.jpg";
import bookmark from "../../assets/Sidebar_assets/bookmark-white.png";
import notification from "../../assets/Sidebar_assets/notification-bell.png";
import search from "../../assets/Sidebar_assets/search.png";
import profile from "../../assets/Sidebar_assets/profile.png";
import more from "../../assets/Sidebar_assets/more.png";
import moreWithNoBorder from "../../assets/Sidebar_assets/more-noborder.png";
import list from "../../assets/Sidebar_assets/list.png";
import email from "../../assets/Sidebar_assets/email.png";
import home from "../../assets/Sidebar_assets/home.png";
import twitter from "../../assets/Sidebar_assets/twitter.png";
import group from "../../assets/Sidebar_assets/group.png";
import SidebarButton from "./SidebarButton";
function Sidebar() {
  return (
    <div id="sidebar">
      <div id="twitterLogo">
        <img src={twitter} alt="twitter" />
      </div>
      <div className="SidebarButtons">
        {sideBarButtons.map((button) => {
          return (
            <SidebarButton key={button.alt} src={button.src} alt={button.alt} />
          );
        })}
        <button className="postButton">Post</button>
      </div>
      <div id="sidebarFooter">
        <img className="profileImg" src={Ashayer} alt="Ashayer" />
        <div id="sidebarFooterText">
          <h3>Ahmad Ashayer</h3>
          <p>@ahmadashayer44</p>
        </div>
        <img className="moreImg" src={moreWithNoBorder} alt="More" />
      </div>
    </div>
  );
}
const sideBarButtons = [
  {
    src: home,
    alt: "Home",
  },
  {
    src: search,
    alt: "Explore",
  },
  {
    src: notification,
    alt: "Notifications",
  },
  {
    src: email,
    alt: "Messages",
  },
  {
    src: list,
    alt: "Lists",
  },
  {
    src: bookmark,
    alt: "Bookmarks",
  },
  {
    src: group,
    alt: "Communities",
  },
  {
    src: profile,
    alt: "Profile",
  },
  {
    src: more,
    alt: "More",
  },
];
export default Sidebar;
