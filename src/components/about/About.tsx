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
      <div tabIndex={0} className={getStyle(style, "header")}>
        About our Project
      </div>
      <div className="w-full flex flex-col items-center gap-8">
        <p className="max-w-xl md:max-w-2xl md:w-5/6">
          The Latin America Digital Money Index aims to track and assess how
          countries in this region are advancing towards digital financial
          systems. The assessment is based on five key areas, offering a
          thorough view of a country's readiness for digital financial
          integration. These pillars are:
        </p>

        <div className="h-full w-full flex flex-wrap gap-10 justify-center">
          <Pillar
            title="Government and Market Support"
            content="Evaluating the degree to which government policies and market conditions are favourable for digital financial services, including the regulatory environment and incentives for innovation."
            imageSrc={pillar1}
          />
          <Pillar
            title="Digital Money Solutions"
            content="Reviewing the presence, accessibility, and innovation in digital financial offerings, such as digital currencies, electronic payment systems, and other digital finance tools."
            imageSrc={pillar2}
          />
          <Pillar
            title="Financial Market Infrastructure Modernisation"
            content="Measuring the extent to which existing financial infrastructure is adapting to support digital transactions, including upgrades to banking systems, digital identity verification, and secure digital transaction mechanisms."
            imageSrc={pillar3}
          />
          <Pillar
            title="Propensity to Adopt"
            content="Gauging the eagerness and preparedness of individuals and businesses to adopt digital financial services, considering digital literacy, trust in digital systems, and the perceived benefits of digital finance."
            imageSrc={pillar4}
          />
          <Pillar
            title="Digital Money Solutions"
            content="Reviewing the presence, accessibility, and innovation in digital financial offerings, such as digital currencies, electronic payment systems, and other digital finance tools."
            imageSrc={pillar5}
          />
        </div>

        {/* <ol className={getStyle(style, "paraCtn") + "list-decimal"}>
          <li>
            <strong>Government and Market Support:</strong> Evaluating the
            degree to which government policies and market conditions are
            favourable for digital financial services, including the regulatory
            environment and incentives for innovation.
          </li>
          <li>
            <strong>Digital Money Solutions:</strong> Reviewing the presence,
            accessibility, and innovation in digital financial offerings, such
            as digital currencies, electronic payment systems, and other digital
            finance tools.
          </li>
          <li>
            <strong>Digital Money Solutions:</strong> Reviewing the presence,
            accessibility, and innovation in digital financial offerings, such
            as digital currencies, electronic payment systems, and other digital
            finance tools.
          </li>
          <li>
            <strong>Financial Market Infrastructure Modernisation:</strong>{" "}
            Measuring the extent to which existing financial infrastructure is
            adapting to support digital transactions, including upgrades to
            banking systems, digital identity verification, and secure digital
            transaction mechanisms.
          </li>
          <li>
            <strong>Propensity to Adopt:</strong> Gauging the eagerness and
            preparedness of individuals and businesses to adopt digital
            financial services, considering digital literacy, trust in digital
            systems, and the perceived benefits of digital finance.
          </li>
          <p>
            The shift towards digital money and digital financial systems is
            expected to bring widespread advantages to LATAM countries,
            including economic growth, expansion of the formal sector, enhanced
            tax collection, and reduced costs in public and private sector
            disbursements.
          </p>
          <p>
            In summary, the Digital Money Index acts as a crucial resource for
            stakeholders in the LATAM region to manage the challenges of digital
            transformation in financial systems. It provides a clear view of
            progress, identifies areas needing improvement, and suggests avenues
            for further development, all with the goal of creating inclusive,
            efficient, and robust digital financial environments. The index
            offers a structured approach to facilitate the digital
            transformation of the financial sector for all economic
            participants.
          </p>
        </ol> */}
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
