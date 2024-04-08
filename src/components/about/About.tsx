import getStyle from "../../Styles";
import Para from "./Para";

const ABOUT_PARAGRAPHS = [
  `
  The Latin America Digital Money Index aims to track and assess how countries in this region are advancing towards digital financial systems. The assessment is based on five key areas, offering a thorough view of a country's readiness for digital financial integration. These pillars are:`,
  // `It advises that as a first step, governments must establish a digital vision
  // that aligns with their larger goals, such as promoting growth, improving
  // service delivery, and increasing public involvement, among others.`,
  // `This year, results showed that countries that have augmented a holistic
  // digital policy with targeted investments have performed particularly well.
  // This was particularly evident in countries such as Malaysia, the United Arab
  // Emirates, Estonia, and Uruguay, which have all outperformed their peers.`,
  // `Ronit Ghose, global head of banking, fintech and digital assets commented:
  // “It is evident in our latest findings that policymakers that played an active
  // role, beyond enacting policies, have made considerable progress in driving
  // digital adoption compared to peers. These entrepreneurial markets have had a
  // bold vision, enacted favorable policies, and made investments to drive the
  // vision.”`,
  // `Deeph Chana, co-Director of the Centre for Financial Technology at Imperial
  // College Business School commented: “I'm delighted to see the publication of
  // this year’s Digital Money Index, which is a core element of our multi-year
  // collaboration with Citi here at the Centre for Financial Technology. This
  // latest version represents a significant advance in our research and
  // development since the DMI was last published, with a refactored data ingestion
  // and processing engine at its heart. The result is a DMI that uses machine
  // learning methods to provide enhanced accuracy and timeliness, a greater
  // ability to process new datasets as they emerge and establishes the basis for
  // further improvements in the years to come."`,
];

function About() {
  return (
    <main id="main-content" className={getStyle(style, "ctn")}>
      <div tabIndex={0} className={getStyle(style, "header")}>
        About our Project
      </div>
      <div className="w-full flex flex-col items-center">
        <p className="max-w-xl md:max-w-2xl md:w-5/6">
          The Latin America Digital Money Index aims to track and assess how
          countries in this region are advancing towards digital financial
          systems. The assessment is based on five key areas, offering a
          thorough view of a country's readiness for digital financial
          integration. These pillars are:,
        </p>
        <ol className={getStyle(style, "paraCtn") + "list-decimal"}>
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
        </ol>
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
