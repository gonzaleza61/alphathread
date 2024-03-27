import Card from "./ImageCard";

export default function AboutUs() {
  return (
    <>
      <section className="h-screen">
        <div className="flex flex-col m-12 bg-slate-300">
          <div className="flex flex-col m-4 bg-white">
            <h1 className="text-center">About Us</h1>
          </div>
          <div className="flex flex-wrap justify-between bg-white">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}
