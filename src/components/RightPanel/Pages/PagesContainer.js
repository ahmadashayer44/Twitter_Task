import PageContainerCSS from "./PagesContainer.module.css";
import Page from "./Page";
import TCSS from "../../../assets/RightPanel_assets/TCSS.png";
import TS from "../../../assets/RightPanel_assets/TS.webp";
import FCC from "../../../assets/RightPanel_assets/FCC.webp";
function PageContainer() {
  return (
    <div id={PageContainerCSS.pageContainer}>
      <h1>You might like</h1>
      {pages.map((page) => {
        return (
          <Page
            key={page.name}
            imageSrc={page.imageSrc}
            title={page.title}
            name={page.name}
          />
        );
      })}

      <button id={PageContainerCSS.showMore}>Show more</button>
    </div>
  );
}
const pages = [
  {
    imageSrc: TCSS,
    title: "Tailwind CSS",
    name: "@tailwindcss",
  },
  {
    imageSrc: TS,
    title: "TypeScript",
    name: "@typescript",
  },
  {
    imageSrc: FCC,
    title: "freecodecamp.org",
    name: "@freeCodeCamp",
  },
];
export default PageContainer;
