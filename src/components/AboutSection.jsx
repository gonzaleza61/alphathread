import Card from "./ImageCard";
import AboutOneImage from "../assets/images/aboutone.jpg";

export default function AboutUs() {
  return (
    <>
      <section className="h-screen">
        <div className="flex flex-col m-12 bg-slate-300">
          <div className="flex flex-col m-4 bg-white">
            <h1 className="text-center">About Us</h1>
          </div>
          <div className="flex flex-wrap justify-between gap-4 bg-white">
            <Card imgSrc={AboutOneImage} title="center" />
            <Card imgSrc={AboutOneImage} title="center" />
            <Card imgSrc={AboutOneImage} title="center" />
            <Card imgSrc={AboutOneImage} title="center" />
          </div>
        </div>
      </section>
    </>
  );
}
