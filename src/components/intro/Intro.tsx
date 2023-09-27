import getStyle from "../../Styles";
import IntroAbout from "./IntroAbout";

function Intro() {
  return (
    <div id="intro" className={getStyle(style, "ctn")}>
      <div className={getStyle(style, "headingCtn")}>
        <p className={getStyle(style, "headingRed")}>Digital Money Index:</p>
        <p className={getStyle(style, "headingBlue")}>
          The Rise of an Entrepreneurial State
        </p>
      </div>

      <IntroAbout />
    </div>
  );
}

const style = {
  ctn: [
    "mt-24",
    "w-full",
    "flex",
    "flex-col",
    "gap-5",
    "sm:p-5",
    "md:mt-32",
    "md:gap-7",
    "lg:gap-10",
  ],
  headingCtn: ["flex", "flex-col", "gap-3", "mdl:flex-row", "mdl:items-center"],
  headingRed: ["text-imperial-red", "text-2xl", "font-medium", "md:text-3xl"],
  headingBlue: [
    "text-header-blue",
    "text-xl",
    "font-medium",
    "sm:text-2xl",
    "md:text-3xl",
  ],
};

export default Intro;
