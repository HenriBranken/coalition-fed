import "../../styles/DiagBanner.scss";

const DiagBanner = ({ text }) => {
// text: "Diagnostic List"

  return (
    <div className="diag-banner">
      {text}
    </div>
  );
};

export default DiagBanner;