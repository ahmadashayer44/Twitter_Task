import TrendsContainerCSS from "./TrendsContainer.module.css";
import Trend from "./Trend";
function TrendsContainer() {
  return (
    <div id={TrendsContainerCSS.trendsContainer}>
      <h1>Trends for you</h1>
      {Trends.map((trend) => {
        return (
          <Trend
            key={trend.trend}
            category={trend.category}
            trend={trend.trend}
            count={trend.count}
          />
        );
      })}
      <button id={TrendsContainerCSS.showMore}>Show more</button>
    </div>
  );
}
const Trends = [
  {
    category: "Gaming-Trending",
    trend: "#VALORANTChampions",
    count: "27.9k",
  },
  {
    category: "",
    trend: "الانستا",
    count: "1411",
  },
  {
    category: "Gaming-Trending",
    trend: "Mako",
    count: "14.1k",
  },
  {
    category: "",
    trend: "رسالة اليوم#",
    count: "22.3k",
  },
  {
    category: "Messi",
    trend: "",
    count: "77.2k",
  },
  {
    category: "",
    trend: "ايفون",
    count: "27.6k",
  },
  {
    category: "Gaming-Trending",
    trend: "fnatic",
    count: "8748",
  },
];
export default TrendsContainer;
