import PageCSS from "./Page.module.css";
import Profile from "../../assets/Main_assets/user.png";
function Page({ imageSrc, title, name, description, followers }) {
  return (
    <div className={PageCSS.page}>
      <div className={PageCSS.followers}>
        <img className={PageCSS.profile} src={Profile} alt="Profile" />
        <p>{followers}</p>
      </div>

      <div className={PageCSS.pageContainer}>
        <img className={PageCSS.pageImage} src={imageSrc} alt={title} />
        <div className={PageCSS.pageText}>
          <h3>{title}</h3>
          <p className={PageCSS.name}>{name}</p>
          <p className={PageCSS.description}>{description}</p>
        </div>
        <button className={PageCSS.followButton}>Follow</button>
      </div>
    </div>
  );
}
export default Page;
