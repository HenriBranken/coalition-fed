import "../../styles/NavDoctor.scss";

const NavDoctor = () => {
  const doctorSvgUrl = "./Jose.png";
  const settingsSvgUrl = "/Settings.svg";
  const moreVertSvgUrl = "/MoreVert.svg";

  return (
    <div className="nav-doctor">
      <img src={doctorSvgUrl} alt="GP Picture" className="doctor-image" />
      <div className="gp-block">
        <div className="gp-name">Dr. Jose Simmons</div>
        <div className="gp-description">General Practitioner</div>
      </div>
      <div className="divider"></div>
      <img src={settingsSvgUrl} alt="Settings Icon" className="settings" />
      <img src={ moreVertSvgUrl} alt="More Icon" className="more-vert" />
    </div>
  );
};

export default NavDoctor;