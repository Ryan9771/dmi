import getStyle from "../../Styles";
import Para from "./Para";

const ABOUT_PARAGRAPHS = [
  `Naveed Sultan, Chairman ICG, commented: “Driving digital money readiness and 
  adoption has not been easy, as has been evident in our previous reports. It 
  requires collaboration across economic stakeholders around a common digital 
  vision, as well as a holistic digital policy. Such a holistic digital policy 
  can enable countries to reap the full benefits of a digitized economy.”`,
  `The report explains that a holistic digital policy rests on four pillars, 
  digital infrastructure, digital adoption, service innovation, and digital 
  trust, driven by a clear vision and supported by robust regulations and 
  governance.`,
  `It advises that as a first step, governments must establish a digital vision 
  that aligns with their larger goals, such as promoting growth, improving 
  service delivery, and increasing public involvement, among others.`,
  `This year, results showed that countries that have augmented a holistic 
  digital policy with targeted investments have performed particularly well. 
  This was particularly evident in countries such as Malaysia, the United Arab 
  Emirates, Estonia, and Uruguay, which have all outperformed their peers.`,
  `Ronit Ghose, global head of banking, fintech and digital assets commented: 
  “It is evident in our latest findings that policymakers that played an active 
  role, beyond enacting policies, have made considerable progress in driving 
  digital adoption compared to peers. These entrepreneurial markets have had a 
  bold vision, enacted favorable policies, and made investments to drive the 
  vision.”`,
  `Deeph Chana, co-Director of the Centre for Financial Technology at Imperial 
  College Business School commented: “I'm delighted to see the publication of 
  this year’s Digital Money Index, which is a core element of our multi-year 
  collaboration with Citi here at the Centre for Financial Technology. This 
  latest version represents a significant advance in our research and 
  development since the DMI was last published, with a refactored data ingestion 
  and processing engine at its heart. The result is a DMI that uses machine 
  learning methods to provide enhanced accuracy and timeliness, a greater 
  ability to process new datasets as they emerge and establishes the basis for 
  further improvements in the years to come."`,
];

function About() {
  return (
    <div className={getStyle(style, "ctn")}>
      <div className={getStyle(style, "header")}>About our Project</div>
      <Para paragraphs={ABOUT_PARAGRAPHS} />
    </div>
  );
}

const style = {
  ctn: ["flex", "flex-col", "w-full", "gap-8", "items-center"],
  header: [
    "text-xl",
    "font-medium",
    "text-header-blue",
    "text-center",
    "sm:text-2xl",
    "md:text-3xl",
  ],
};

export default About;
