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
  ctn: [
    "fixed",
    "z-40",
    "flex",
    "w-96",
    "items-center",
    "justify-between",
    "bg-background",
    "px-2",
    "pt-3",
    "pb-1",
    "pb-4",
    "border-b",
    "sm:border-b-2",
    "sm:px-4",
    "sm:pb-4",
    "sm:pb-2",
    "md:px-6",
    "md:pt-5",
    "md:pb-3",
    "trans",
  ],
  logoIcon: ["font-semibold", "text-5xl", "md:text-6xl", "trans"],
  logoCtn: ["flex", "items-center", "gap-3", "cursor-pointer", "trans"],
  logoText: [
    "w-32",
    "font-semibold",
    "text-sm",
    "sm:text-base",
    "md:text-xl",
    "md:w-52",
    "trans",
  ],
  subNavbar: ["flex", "items-center", "gap-4", "md:gap-10"],
  subNavbarItem: ["font-semibold", "text-xs", "cursor-pointer", "sm:text-base"],
};

export default Navbar;