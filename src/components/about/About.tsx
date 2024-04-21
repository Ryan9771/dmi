import getStyle from "../../Styles";
import Pillar from "./Pillar";
import pillar1 from "/pillar1.png";
import pillar2 from "/pillar2.png";
import pillar3 from "/pillar3.png";
import pillar4 from "/pillar4.png";
import pillar5 from "/pillar5.png";

function About() {
  return (
    <main id="main-content" className={getStyle(style, "ctn")}>
      {/* <div tabIndex={0} className={getStyle(style, "header")}>
        About our Project
      </div> */}
      <div className={getStyle(style, "mainSubCtn")}>
        <p className="max-w-xl md:max-w-2xl text-lg">
          The Latin America Digital Money Index aims to track and assess how
          countries in this region are advancing towards digital financial
          systems. The assessment is based on five key areas, offering a
          thorough view of a country's readiness for digital financial
          integration. These pillars are:
        </p>

        <div className={getStyle(style, "pillarCtn")}>
          <Pillar
            pillarNum={1}
            title="Government and Market Support"
            content="Evaluating the degree to which government policies and market conditions are favourable for digital financial services, including the regulatory environment and incentives for innovation."
            imageSrc={pillar1}
          />
          <Pillar
            pillarNum={2}
            title="Digital Money Solutions"
            content="Reviewing the presence, accessibility, and innovation in digital financial offerings, such as digital currencies, electronic payment systems, and other digital finance tools."
            imageSrc={pillar2}
          />
          <Pillar
            pillarNum={3}
            title="Financial Market Infrastructure Modernisation"
            content="Measuring the extent to which existing financial infrastructure is adapting to support digital transactions, including upgrades to banking systems, digital identity verification, and secure digital transaction mechanisms."
            imageSrc={pillar3}
          />
          <Pillar
            pillarNum={4}
            title="Propensity to Adopt"
            content="Gauging the eagerness and preparedness of individuals and businesses to adopt digital financial services, considering digital literacy, trust in digital systems, and the perceived benefits of digital finance."
            imageSrc={pillar4}
          />
          <Pillar
            pillarNum={5}
            title="Digital Money Solutions"
            content="Reviewing the presence, accessibility, and innovation in digital financial offerings, such as digital currencies, electronic payment systems, and other digital finance tools."
            imageSrc={pillar5}
          />
        </div>
      </div>
    </main>
  );
}

const style = {
  ctn: [
    "flex",
    "flex-col",
    "w-full",
    "gap-8",
    "items-center",
    "md:gap-10",
    "lg:gap-16",
  ],
  mainSubCtn: [
    "w-full",
    "flex",
    "flex-col",
    "items-center",
    "gap-8",
    "md:gap-16",
  ],
  pillarCtn: [
    "h-full",
    "w-full",
    "flex",
    "flex-wrap",
    "gap-10",
    "justify-center",
  ],
  header: [
    "text-xl",
    "font-medium",
    "text-header-blue",
    "text-center",
    "sm:text-2xl",
    "lg:text-3xl",
  ],
  paraCtn: [
    "p-4",
    "bg-white",
    "rounded-md",
    "shadow-lg",
    "flex",
    "flex-col",
    "gap-4",
    "leading-6",
    "sm:max-w-xl",
    "sm:px-6",
    "md:max-w-2xl",
    "md:px-8",
    "md:py-6",
    "md:w-5/6",
    "lg:leading-7",
    "lg:p-7",
    "lg:px-8",
    "lg:bg-transparent",
    "lg:shadow-none",
    "lg:p-0",
  ],
};

export default About;
