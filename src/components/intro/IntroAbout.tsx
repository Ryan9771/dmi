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
    "lg:mt-16",
    "items-center",
    "trans",
    "lg:flex-row",
    "lg:justify-center",
    "md:gap-20",
  ],
  textBox: [
    "p-4",
    "bg-white",
    "rounded-md",
    "shadow-lg",
    "flex",
    "flex-col",
    "sm:text-lg",
    "gap-4",
    "trans",
    "md:w-4/6",
    "leading-6",
    "max-w-xl",
    "lg:leading-7",
    "lg:max-w-lg",
    "lg:p-7",
    "lg:px-8",
    "text-justify",
  ],
  img: [
    "rounded-md",
    "shadow-md",
    "w-80",
    "sm:w-[450px]",
    "trans",
    "xl:w-[500px]",
  ],
};

export default IntroAbout;
