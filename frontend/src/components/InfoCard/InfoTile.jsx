import "../../styles/InfoTile.scss";

const InfoTile = ({ svgUrl, title, detail }) => { 

  return (
    <div className="info-tile">
      <img src={"/" + svgUrl} alt="Icon" className="tile-icon" />
      <div className="info-stack">
        <div className="top-line">{title}</div>
        <div className="bottom-line">{ detail}</div>
      </div>
    </div>
  )
}

export default InfoTile;