import Sidebar from "../components/Sidebar/Sidebar";
import RightPanel from "../components/RightPanel/RightPanel";
import Main from "../components/Main/Main";
import "./Home.css";
import { useState } from "react";
function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div id="home">
      <Sidebar showSidebar={showSidebar} />
      <Main setShowSidebar={setShowSidebar} showSideBar={showSidebar} />
      <RightPanel />
    </div>
  );
}

export default Home;
