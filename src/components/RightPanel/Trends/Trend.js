import TrendCSS from "./Trend.module.css";
import more from "../../../assets/RightPanel_assets/more.png";
function Trend({ category, trend, count }) {
  let editedTrend = trend;
  if (trend.charAt(0) === "#") editedTrend = trend.slice(1);
  const isArabic = /\p{Script=Arabic}/u.test(editedTrend.charAt(0));
  let classArabic = isArabic ? "arabic" : "";
  return (
    <div id={TrendCSS.trend}>
      <div id={TrendCSS.trendText}>
        <h3 className={classArabic} id={TrendCSS.trendCategory}>
          {category}
        </h3>
        <p className={classArabic} id={TrendCSS.trendName}>
          {trend}
        </p>
        <p id={TrendCSS.trendCount}>{count} posts</p>
      </div>
      {!isArabic && <img src={more} alt={more} />}
    </div>
  );
}

export default Trend;
