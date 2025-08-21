import PageContainerCSS from "./PagesContainer.module.css";
import Page from "./Page";
import TCSS from "../../../assets/RightPanel_assets/TCSS.png";
import TS from "../../../assets/RightPanel_assets/TS.webp";
import FCC from "../../../assets/RightPanel_assets/FCC.webp";
function PageContainer() {
  return (
    <div id={PageContainerCSS.pageContainer}>
      <h1>You might like</h1>
      <Page imageSrc={TCSS} title="Tailwind CSS" name="@tailwindcss" />
      <Page imageSrc={TS} title="TypeScript" name="@typescript" />
      <Page imageSrc={FCC} title="freecodecamp.org" name="@freeCodeCamp" />

      <button id={PageContainerCSS.showMore}>Show more</button>
    </div>
  );
}

export default PageContainer;
