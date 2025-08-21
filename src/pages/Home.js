import Sidebar from "../components/Sidebar/Sidebar";
import RightPanel from "../components/RightPanel/RightPanel";
import Main from "../components/Main/Main";
import "./Home.css";

function Home() {
  return (
    <div id="home">
      <Sidebar />
      <Main />
      <RightPanel />
    </div>
  );
}

export default Home;
