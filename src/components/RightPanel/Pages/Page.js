import PageCSS from "./Page.module.css";

function Page({ imageSrc, title, name }) {
  return (
    <div id={PageCSS.page}>
      <img src={imageSrc} alt={title} />
      <div id={PageCSS.pageText}>
        <h3>{title}</h3>
        <p>{name}</p>
      </div>
      <button>Follow</button>
    </div>
  );
}
export default Page;
