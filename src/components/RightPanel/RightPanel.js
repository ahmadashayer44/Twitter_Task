import serach from "../../assets/RightPanel_assets/loupe.png";
import RightPanelCSS from "./RightPanel.module.css";
import PageContainer from "./Pages/PagesContainer";
import TrendsContainer from "./Trends/TrendsContainer";
function RightPanel() {
  return (
    <div id={RightPanelCSS.rightPanel}>
      <label htmlFor="search" id={RightPanelCSS.searchBox}>
        <img src={serach} alt="search" />
        <input id="search" type="text" placeholder="Search" />
      </label>
      <PageContainer />
      <TrendsContainer />
    </div>
  );
}
export default RightPanel;
