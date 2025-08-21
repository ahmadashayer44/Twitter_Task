import serach from "../../assets/RightPanel_assets/loupe.png";
import "./RightPanel.css";
import PageContainer from "./Pages/PagesContainer";
import TrendsContainer from "./Trends/TrendsContainer";
function RightPanel() {
  return (
    <div id="rightPanel">
      <label htmlFor="search" id="searchBox">
        <img src={serach} alt="search" />
        <input id="search" type="text" placeholder="Search" />
      </label>
      <PageContainer />
      <TrendsContainer />
    </div>
  );
}
export default RightPanel;
