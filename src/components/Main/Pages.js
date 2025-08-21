import PagesCSS from "./Pages.module.css";

function Pages({ children }) {
  return (
    <div className={PagesCSS.container}>
      <h1 className={PagesCSS.title}>Who to follow</h1>
      {children}
      <button className={PagesCSS.showMore}>Show more</button>
    </div>
  );
}
export default Pages;
