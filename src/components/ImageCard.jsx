import PropTypes from "prop-types";

export default function Card({ imgSrc, title }) {
  return (
    <>
      <div
        className="h-full content-center"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <h2 className="text-center content-center">{title}</h2>
      </div>
    </>
  );
}

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired, // Require imgSrc prop to be a string
  title: PropTypes.string.isRequired,
};
