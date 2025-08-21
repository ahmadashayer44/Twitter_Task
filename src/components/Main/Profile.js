import ProfileCSS from "./Profile.module.css";
import more from "../../assets/Main_assets/more.png";
import notification from "../../assets/Main_assets/add-alarm.png";
import link from "../../assets/Main_assets/link.png";
import calender from "../../assets/Main_assets/calendar.png";
import Posts from "./Posts";
import { useState } from "react";
function Profile(props) {
  const [active, setActive] = useState(1);
  const {
    coverImg,
    profileImg,
    pageName,
    followers,
    following,
    pageUsername,
    website,
    date,
    description,
    site,
  } = props;
  return (
    <div className={ProfileCSS.profileContainer}>
      <img className={ProfileCSS.coverImg} src={coverImg} alt="cover" />
      <div className={ProfileCSS.profileDetails}>
        <div className={ProfileCSS.profileImgWidthButtonsContainer}>
          <img
            className={ProfileCSS.profileImg}
            src={profileImg}
            alt="profile"
          />
          <div className={ProfileCSS.rightSideButtons}>
            <button className={ProfileCSS.moreAndNotiButton}>
              {" "}
              <img className={ProfileCSS.MoreButton} src={more} alt="more" />
            </button>
            <button className={ProfileCSS.moreAndNotiButton}>
              <img
                className={ProfileCSS.Notification}
                src={notification}
                alt="notification"
              />
            </button>
            <button className={ProfileCSS.followButton}>Following</button>
          </div>
        </div>
        <div className={ProfileCSS.profileInfo}>
          <h1 className={ProfileCSS.pageName}>{pageName}</h1>
          <p className={ProfileCSS.pageUsername}>{pageUsername}</p>
          <p className={ProfileCSS.description}>{description}</p>
        </div>
        <div className={ProfileCSS.linksWithDate}>
          <div>
            <img src={link} alt="link" />
            <a href={website}>{site}</a>
          </div>
          <div>
            <img src={calender} alt="calender" />
            <p>{date}</p>
          </div>
        </div>
        <div className={ProfileCSS.followersAndFollowing}>
          <div>
            <p>{followers}</p>
            <p>Followers</p>
          </div>
          <div>
            <p>{following}</p>
            <p>Following</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
