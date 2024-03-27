import AboutOneImage from "../assets/images/aboutone.jpg";

export default function Card() {
  return (
    <>
      <div
        className="flex-1 h-full"
        style={{
          backgroundImage: `url(${AboutOneImage})`,
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
