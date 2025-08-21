import MainCSS from "./Main.module.css";
import Profile from "./Profile";
import Page from "./Page";
import logoImage from "../../assets/logo.svg";
import coverImg from "../../assets//Main_assets/coverImg.png";
import Posts from "./Posts";
import userImage from "../../assets/Sidebar_assets/Ashayer.jpg";
import Pages from "./Pages";
import FCC from "../../assets/RightPanel_assets/FCC.webp";
import TS from "../../assets/RightPanel_assets/TS.webp";
import TCSS from "../../assets/RightPanel_assets/TCSS.png";
import { useState } from "react";

function Main({ showSideBar, setShowSidebar }) {
  const [active, setActive] = useState(1);
  return (
    <div className={MainCSS.mainContainer}>
      {showSideBar && (
        <div
          className={MainCSS.overlay}
          onClick={() => setShowSidebar(false)}
        />
      )}
      {!showSideBar && (
        <header>
          <button
            className={MainCSS.profileSideButton}
            onClick={(e) => setShowSidebar(!showSideBar)}
          >
            {" "}
            <img src={userImage} className={MainCSS.userImage} alt="logo" />
          </button>
          <button className={MainCSS.backButton}>←</button>
          <div className={MainCSS.headerContent}>
            <h1 className={MainCSS.pageName}>{pageDetails.pageName}</h1>
            <p className={MainCSS.postsNumber}>
              {pageDetails.postsNumber} posts
            </p>
          </div>
        </header>
      )}

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
      <Pages>
        {pages.map((page) => {
          return (
            <Page
              key={page.name}
              imageSrc={page.imageSrc}
              name={page.name}
              title={page.title}
              followers={page.followers}
              description={page.description}
            />
          );
        })}
      </Pages>
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
const pages = [
  {
    imageSrc: FCC,
    name: "@freeCodeCamp",
    title: "freecodecamp.org",
    followers: "Node.js and 9 others follow",
    description:
      "We're a community of millions of people who are building new skills and getting new jobs together. A 501(c)(3) public charity. Tweets by @abbeyrenn.",
  },
  {
    imageSrc: TS,
    name: "@typescript",
    title: "TypeScript",
    followers: "Node.js and 9 others follow",
    description:
      "TypeScript is a superset of JavaScript that compiles to plain JavaScript. Tweets by @abbeyrenn.",
  },
  {
    imageSrc: TCSS,
    name: "@tailwindcss",
    title: "Tailwind CSS",
    followers: "Node.js and 9 others follow",
    description:
      "The utility-first CSS framework for rapid UI development. Tweets by @abbeyrenn.",
  },
];
export default Main;
