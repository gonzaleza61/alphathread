import AboutOneImage from "../assets/images/aboutone.jpg";
import PropTypes from "prop-types";

export default function Card({ imgSrc }) {
  return (
    <>
      <div
        className="flex-1 h-full"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        card
      </div>
    </>
  );
}

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired, // Require imgSrc prop to be a string
};
