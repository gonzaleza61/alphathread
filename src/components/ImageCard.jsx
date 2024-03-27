import PropTypes from "prop-types";

export default function Card({ imgSrc, title }) {
  return (
    <>
      <div
        className="flex-1 h-full text-center content-center min-w-64"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        {title}
      </div>
    </>
  );
}

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired, // Require imgSrc prop to be a string
  title: PropTypes.string.isRequired,
};
