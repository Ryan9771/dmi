import getStyle from "../../Styles";

function Intro() {
  return (
    <div className={getStyle(style, "ctn")}>
      <div className={getStyle(style, "headingCtn")}>
        <p className={getStyle(style, "headingRed")}>Digital Money Index:</p>
        <p className={getStyle(style, "headingBlue")}>
          The Rise of an Entrepreneurial State
        </p>
      </div>
    </div>
  );
}

const style = {
  ctn: ["w-full", "flex", "flex-col"],
  headingCtn: ["flex", "flex-col", "gap-3"],
  headingRed: ["text-imperial-red", "text-2xl", "font-medium"],
  headingBlue: ["text-header-blue", "text-xl", "font-medium"],
};

export default Intro;
