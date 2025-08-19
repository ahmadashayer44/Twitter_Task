import "./SidebarButton.css";
function SidebarButton({ src, alt }) {
  return (
    <div className="SidebarButton">
      <img src={src} alt={alt} />
      <label>{alt}</label>
    </div>
  );
}

export default SidebarButton;
