import "../../styles/NavItem.scss";

const NavItem = ({ svgUrl, text, active }) => {

  return (
    <div className={active ? "nav-item active" : "nav-item"}>
      <img src={"/" + svgUrl} alt={svgUrl + " logo"} className="nav-item-logo" />
      <div className="nav-item-text">{text}</div>
    </div>
  );
};

export default NavItem;