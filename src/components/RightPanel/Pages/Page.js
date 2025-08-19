import "./Page.css";

function Page({ imageSrc, title, name }) {
  return (
    <div id="page">
      <img src={imageSrc} alt={title} />
      <div id="pageText">
        <h3>{title}</h3>
        <p>{name}</p>
      </div>
      <button>Follow</button>
    </div>
  );
}
export default Page;
