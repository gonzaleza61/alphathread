import PropTypes from "prop-types";

export default function Card({ imgSrc, title }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <h2>{title}</h2>
      </div>
    </>
  );
}

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired, // Require imgSrc prop to be a string
  title: PropTypes.string.isRequired,
};
