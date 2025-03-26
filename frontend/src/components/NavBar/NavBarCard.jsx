import "../../styles/NavBarCard.scss";
import NavDoctor from "./NavDoctor";
import NavItems from "./NavItems";
import NavLogo from "./NavLogo";

const NavBarCard = () => {

  return (
    <div className="nav-bar-card">
      <NavLogo />
      <NavItems />
      <NavDoctor />
    </div>
  );
};

export default NavBarCard;