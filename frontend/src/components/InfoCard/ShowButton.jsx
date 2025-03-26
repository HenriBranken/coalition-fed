import "../../styles/ShowButton.scss";

const ShowButton = ({ text }) => {

  return (
    <button className="show">
      {text}
    </button>
  )

}

export default ShowButton;