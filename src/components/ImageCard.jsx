import PropTypes from "prop-types";

export default function Card({ imgSrc, title }) {
  return (
    <>
      {/* <div
        className="p-4"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          transition: "opacity: 0.3s",
          opacity: 1,
          ":hover": {
            opacity: 0.8,
          },
        }}
      > */}
      <div className="h-[550px] bg-black relative text-center">
        <h2 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-2/4 font-bold text-white">
          {title}
        </h2>

        <img
          className="h-full w-full object-cover hover:opacity-40 "
          src={imgSrc}
        />
      </div>
      {/* </div> */}
    </>
  );
}

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired, // Require imgSrc prop to be a string
  title: PropTypes.string.isRequired,
};
