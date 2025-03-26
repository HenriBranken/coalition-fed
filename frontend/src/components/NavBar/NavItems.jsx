import NavItem from "./NavItem";

import "../../styles/NavItems.scss";

const NavItems = () => {

  const data = [
    { svgUrl: "Home.svg", text: "Overview" },
    { svgUrl: "Group.svg", text: "Patients" },
    { svgUrl: "Calendar.svg", text: "Schedule" },
    { svgUrl: "ChatBubble.svg", text: "Message" },
    { svgUrl: "CreditCard.svg", text: "Transactions" }
  ]

  const activeTab = "Patients";

  return (
    <div className="nav-items">
      {data.map(entry => (
        <NavItem svgUrl={entry.svgUrl} text={entry.text} active={entry.text === activeTab} key={entry.svgUrl.concat(entry.text)} />
      ))}
    </div>
  );
};

export default NavItems;