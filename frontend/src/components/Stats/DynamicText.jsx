import "../../styles/DynamicText.scss";

const DynamicText = ({ text }) => {
  const firstWord = text.trim().split(" ")[0].toLowerCase();
  
  if (firstWord === "lower") {
    return (
      <div className="dynamic-text">
        <img src="/ArrowDown.svg" alt="Down Arrow" />
        <div className="text-value">{text}</div>
      </div>
    );
  }
  if (firstWord === "higher") {
    return (
      <div className="dynamic-text">
        <img src="/ArrowUp.svg" alt="Up Arrow" />
        <div className="text-value">{text}</div>
      </div>
    );
  }

  return <div className="text-value">{text}</div>;
}

export default DynamicText;