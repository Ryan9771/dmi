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
      <div className={getStyle(style, "subNavbar")}>
        <p className={getStyle(style, "subNavbarItem")}>About</p>
        <p className={getStyle(style, "subNavbarItem")}>Visualisation</p>
      </div>
    </div>
  );
}

const style = {
  ctn: ["flex", "w-full", "items-center", "justify-between", "px-2", "py-1"],
  logoIcon: ["font-semibold", "text-5xl"],
  logoCtn: ["flex", "items-center", "gap-3", "cursor-pointer"],
  logoText: ["w-32", "font-semibold", "text-sm"],
  subNavbar: ["flex", "items-center", "gap-4"],
  subNavbarItem: ["font-semibold", "text-xs", "cursor-pointer"],
};

export default Navbar;
