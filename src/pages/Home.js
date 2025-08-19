import Sidebar from "../components/Sidebar/Sidebar";
import RightPanel from "../components/RightPanel/RightPanel";

import "./Home.css";
function Home() {
  return (
    <div id="home">
      <Sidebar />
      <RightPanel />
    </div>
  );
}

export default Home;
