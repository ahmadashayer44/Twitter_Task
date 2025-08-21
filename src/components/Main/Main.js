import MainCSS from "./Main.module.css";
import Profile from "./Profile";
import Pages from "./Pages";
import logoImage from "../../assets/logo.svg";
import coverImg from "../../assets//Main_assets/coverImg.png";
import Posts from "./Posts";
import userImage from "../../assets/Sidebar_assets/Ashayer.jpg";
import { useState } from "react";

function Main() {
  const [active, setActive] = useState(1);
  return (
    <div className={MainCSS.mainContainer}>
      <header>
        <button className={MainCSS.backButton}>←</button>
        <div className={MainCSS.headerContent}>
          <h1 className={MainCSS.pageName}>{pageDetails.pageName}</h1>
          <p className={MainCSS.postsNumber}>{pageDetails.postsNumber} posts</p>
        </div>
      </header>
      <Profile
        coverImg={pageDetails.coverImg}
        profileImg={pageDetails.profileImg}
        pageName={pageDetails.pageName}
        followers={pageDetails.followers}
        following={pageDetails.following}
        pageUsername={pageDetails.pageUsername}
        website={pageDetails.website}
        date={pageDetails.date}
        description={pageDetails.description}
        site={pageDetails.site}
      />
      <div className={MainCSS.Buttons}>
        <button
          className={active === 1 ? MainCSS.active : ""}
          onClick={(e) => {
            e.target.className = MainCSS.active;
            setActive(1);
          }}
        >
          {" "}
          Posts
        </button>
        <button
          className={active === 2 ? MainCSS.active : ""}
          onClick={(e) => {
            e.target.className = MainCSS.active;
            setActive(2);
          }}
        >
          Replies
        </button>
        <button
          className={active === 3 ? MainCSS.active : ""}
          onClick={(e) => {
            e.target.className = MainCSS.active;
            setActive(3);
          }}
        >
          Media
        </button>
        <button
          className={active === 4 ? MainCSS.active : ""}
          onClick={(e) => {
            e.target.className = MainCSS.active;
            setActive(4);
          }}
        >
          Likes
        </button>
      </div>
      {active === 1 && (
        <Posts
          image={postDetails.image}
          name={postDetails.name}
          userName={postDetails.userName}
          postTime={postDetails.postTime}
          postText={postDetails.postText}
          profileName={postDetails.profileName}
          likeNumber={postDetails.likeNumber}
          commentNumber={postDetails.commentNumber}
          repostNumber={postDetails.repostNumber}
          anayliticNumber={postDetails.anayliticNumber}
          pageName={pageDetails.pageName}
        />
      )}
    </div>
  );
}
const pageDetails = {
  pageName: "React",
  postsNumber: "2611",
  followers: "708.1K",
  following: "267",
  pageUsername: "@reactjs",
  website: "https://react.dev/",
  date: "Joined July 2013",
  description: "The library for web and native user interfaces",
  coverImg: coverImg,
  profileImg: logoImage,
  site: "react.dev",
};
const postDetails = {
  image: userImage,
  name: "Ahmad_Ashayer",
  userName: "@Ahmad_Ashayer",
  postTime: "May 29",
  postText: "happy berthday React to @reactjs!",
  profileName: "React",
  likeNumber: "3701",
  commentNumber: "46",
  repostNumber: "675",
  anayliticNumber: "1.1M",
};
export default Main;
