import PostsCSS from "./Posts.module.css";
import repost from "../../assets/Main_assets/repost.png";
import comment from "../../assets/Main_assets/comment.png";
import like from "../../assets/Main_assets/heart.png";
import analytic from "../../assets/Main_assets/analytics.png";
import upload from "../../assets/Main_assets/upload.png";
import more from "../../assets/RightPanel_assets/more.png";
function Posts(props) {
  const {
    image,
    name,
    userName,
    postTime,
    postText,
    profileName,
    likeNumber,
    commentNumber,
    repostNumber,
    anayliticNumber,
    pageName,
  } = props;
  return (
    <div className={PostsCSS.postsContainer}>
      <div className={PostsCSS.post}>
        <img src={repost} alt="repost" />
        <p>{pageName} resposted</p>
      </div>
      <div className={PostsCSS.postDetails}>
        <img src={image} className={PostsCSS.userImage} alt="comment" />
        <div className={PostsCSS.postContent}>
          <div className={PostsCSS.header}>
            <p>{name}</p>
            <p>{userName}</p>
            <p>{postTime}</p>
            <button>
              <img src={more} alt="more" />
            </button>
          </div>
          <div className={PostsCSS.postText}>{postText}</div>
        </div>
      </div>
      <div className={PostsCSS.postFooter}>
        <button>
          <img src={comment} alt="comment" />
          <p>{commentNumber}</p>
        </button>
        <button>
          <img src={repost} alt="repost" />
          <p>{repostNumber}</p>
        </button>
        <button>
          <img src={like} alt="like" />
          <p>{likeNumber}</p>
        </button>
        <button>
          <img src={analytic} alt="analytic" />
          <p>{anayliticNumber}</p>
        </button>
        <button>
          <img src={upload} alt="upload" />
        </button>
      </div>
    </div>
  );
}
export default Posts;
