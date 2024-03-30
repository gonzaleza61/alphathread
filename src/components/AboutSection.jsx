import Card from "./ImageCard";
import AboutOneImage from "../assets/images/aboutone.jpg";

export default function AboutUs() {
  return (
    <>
      <section className="h-screen">
        <div className="flex flex-col m-12 bg-slate-300">
          <div className="flex flex-col m-4 bg-white">
            <h1 className="text-center text-4xl font-bold">
              <span className="inline-block border-b-2 border-red-500 pb-1">
                What We Do
              </span>
            </h1>
          </div>
          <div className="grid grid-rows-4 grid-cols-1 justify-between gap-4 bg-red-500 lg:grid-cols-4 lg:grid-rows-1 sm:grid-rows-2 sm:grid-cols-2">
            <Card imgSrc={AboutOneImage} title="center" />
            <Card imgSrc={AboutOneImage} title="joe biden" />
            <Card imgSrc={AboutOneImage} title="center" />
            <Card imgSrc={AboutOneImage} title="center" />
          </div>
        </div>
      </section>
    </>
  );
}
