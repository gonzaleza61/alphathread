import PropTypes from "prop-types";

export default function Card({ imgSrc, title }) {
  return (
    <>
      <div className="h-[550px] bg-black relative text-center">
        <h2 className="absolute top-1/3 left-1/2 -translate-y-1/2 -translate-x-2/4 font-bold text-white">
          {title}
        </h2>
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </>
  );
}

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired, // Require imgSrc prop to be a string
  title: PropTypes.string.isRequired,
};
