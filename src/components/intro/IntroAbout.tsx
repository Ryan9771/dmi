import getStyle from "../../Styles";
import homeImg from "/homeImage.webp";

function IntroAbout() {
  return (
    <div className={getStyle(style, "ctn")}>
      <img src={homeImg} className={getStyle(style, "img")} />
      <div className={getStyle(style, "textBox")}>
        <p>
          Citi, in partnership with Imperial College Business School’s Centre
          for Financial Technology, has launched its latest Digital Money Index.
          The index, now in its eighth year, tracks 113 countries (up from 84 in
          previous years) in terms of their development of digital money
          readiness.
        </p>
        <p>
          The index continues to classify countries into four clusters –
          Incipient, Emerging, In-transition and Materially Ready - according to
          their levels of digital readiness. This year’s revamped index includes
          new indicators and profiles the progress made by several developing
          economies in driving digital money readiness.
        </p>
      </div>
    </div>
  );
}

const style = {
  ctn: [
    "w-full",
    "flex",
    "flex-col",
    "gap-8",
    "mt-4",
    "items-center",
    "trans",
    "md:mt-8",
    "md:gap-16",
    "lg:mt-4",
    "lg:mt-16",
    "lg:gap-18",
    "lg:flex-row",
    "lg:justify-center",
  ],
  textBox: [
    "p-4",
    "bg-white",
    "rounded-md",
    "shadow-lg",
    "flex",
    "text-justify",
    "flex-col",
    "gap-4",
    "trans",
    "leading-6",
    "max-w-xl",
    "sm:text-lg",
    "sm:px-6",
    "md:w-4/6",
    "lg:leading-7",
    "lg:max-w-lg",
    "lg:py-5",
    "lg:px-8",
  ],
  img: [
    "rounded-md",
    "shadow-md",
    "w-80",
    "trans",
    "sm:w-[450px]",
    "xl:w-[500px]",
  ],
};

export default IntroAbout;
