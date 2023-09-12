import getStyle from "../../Styles";
import IntroAbout from "./IntroAbout";

function Intro() {
  return (
    <div className={getStyle(style, "ctn")}>
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
  ctn: ["w-full", "flex", "flex-col", "gap-5"],
  headingCtn: ["flex", "flex-col", "gap-3"],
  headingRed: ["text-imperial-red", "text-2xl", "font-medium"],
  headingBlue: ["text-header-blue", "text-xl", "font-medium"],
};

export default Intro;
