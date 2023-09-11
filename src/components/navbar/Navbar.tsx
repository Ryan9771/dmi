import getStyle from "../../Styles";

function Navbar() {
  return (
    <div className={getStyle(style, "ctn")}>
      <div className={getStyle(style, "logoCtn")}>
        <p className={getStyle(style, "logoIcon")}>B</p>
        <p className={getStyle(style, "logoText")}>
          Imperial College Business School
        </p>
      </div>
    </div>
  );
}

const style = {
  ctn: ["flex", "items-center", "justify-between", "px-2", "py-1"],
  logoIcon: ["font-semibold", "text-6xl"],
  logoCtn: ["flex", "items-center", "gap-4"],
  logoText: ["w-32", "font-semibold"],
};

export default Navbar;
