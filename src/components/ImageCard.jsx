import AboutOneImage from "../assets/images/aboutone.jpg";

export default function Card() {
  return (
    <>
      <div
        className="flex-1 m-1"
        style={{
          backgroundImage: `url(${AboutOneImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        card
      </div>
    </>
  );
}
