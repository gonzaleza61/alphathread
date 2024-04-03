import Card from "./ImageCard";
import AboutOneImage from "../assets/images/aboutone.jpg";

export default function AboutUs() {
  return (
    <>
      <section className="h-screen">
        <div className="flex flex-col m-12 bg-white">
          <div className="flex flex-col m-4 bg-white">
            <h1 className="text-center text-4xl font-bold">
              <span className="inline-block border-b-2  pb-1">What We Do</span>
            </h1>
          </div>
          <div className="grid grid-rows-4 grid-cols-1 justify-between gap-4  lg:grid-cols-4 lg:grid-rows-1 sm:grid-rows-2 sm:grid-cols-2">
            <Card imgSrc={AboutOneImage} title="Comprehensive Tool Solutions" />
            <Card imgSrc={AboutOneImage} title="Expert Fastener Distribution" />
            <Card
              imgSrc={AboutOneImage}
              title="Tool Repair and Maintenance Services"
            />
            <Card
              imgSrc={AboutOneImage}
              title="Customized Tool and Fastener Consultation"
            />
          </div>
        </div>
      </section>
    </>
  );
}
