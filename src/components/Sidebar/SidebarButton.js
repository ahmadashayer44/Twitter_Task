import SidebarCSS from "./SidebarButton.module.css";
function SidebarButton({ src, alt }) {
  return (
    <div className={SidebarCSS.SidebarButton}>
      <img src={src} alt={alt} />
      <label>{alt}</label>
    </div>
  );
}

export default SidebarButton;
