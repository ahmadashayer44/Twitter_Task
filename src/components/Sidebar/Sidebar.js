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
        <SidebarButton src={home} alt="Home" />
        <SidebarButton src={search} alt="Explore" />
        <SidebarButton src={notification} alt="Notifications" />
        <SidebarButton src={email} alt="Messages" />
        <SidebarButton src={list} alt="Lists" />
        <SidebarButton src={bookmark} alt="Bookmarks" />
        <SidebarButton src={group} alt="Communities" />
        <SidebarButton src={profile} alt="Profile" />
        <SidebarButton src={more} alt="More" />
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

export default Sidebar;
