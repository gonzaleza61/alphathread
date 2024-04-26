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
            <Card
              imgSrc={AboutOneImage}
              title={CardInfo.CardOne.title}
              description={CardInfo.CardOne.description}
            />
            <Card
              imgSrc={AboutOneImage}
              title={CardInfo.CardTwo.title}
              description={CardInfo.CardTwo.description}
            />
            <Card
              imgSrc={AboutOneImage}
              title={CardInfo.CardThree.title}
              description={CardInfo.CardThree.description}
            />
            <Card
              imgSrc={AboutOneImage}
              title={CardInfo.CardFour.title}
              description={CardInfo.CardFour.description}
            />
          </div>
        </div>
      </section>
    </>
  );
}

const CardInfo = {
  CardOne: {
    title: "Comprehensive Tool Solutions",
    imgSrc: { AboutOneImage },
    description:
      "Providing a wide range of high-quality tools and equipment for various industries, ensuring efficiency and productivity in every project.",
  },
  CardTwo: {
    title: "Expert Fastener Distribution",
    imgSrc: { AboutOneImage },
    description:
      "Supplying top-grade fasteners for industrial and construction needs, with a focus on reliability, durability, and superior performance in demanding environments.",
  },
  CardThree: {
    title: "Tool Repair and Maintenance Services",
    imgSrc: { AboutOneImage },
    description:
      "Offering professional repair and maintenance services to extend the lifespan of tools, ensuring optimal performance and cost-effectiveness for our customers.",
  },
  CardFour: {
    title: "Customized Tool and Fastener Consultation",
    imgSrc: { AboutOneImage },
    description:
      "Tailoring solutions to meet unique project requirements, providing expert advice, product recommendations, and personalized service for optimal tool and fastener selection.",
  },
};
