import getStyle from "../../Styles";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <div className={getStyle(style, "ctn")}>
      <div className={getStyle(style, "logoCtn")}>
        {/* <h1 className={getStyle(style, "logoIcon")}>B</h1>
        <h1 className={getStyle(style, "logoText")}>
          Imperial College Business School
        </h1> */}
        <img
          className="hidden sm:flex sm:h-11 md:h-12"
          src="/icl-logo-big.svg"
          alt="Imperial Business School logo"
        />
        <img
          className="flex sm:hidden w-6"
          src="/icl-navbar-logo.png"
          alt="Imperial Business School Logo"
        />
      </div>
      <div className={getStyle(style, "subNavbar")}>
        <HashLink
          aria-label="Jump to the about section to read about our project"
          to="/#intro"
          className={getStyle(style, "subNavbarItem")}
        >
          About
        </HashLink>
        <HashLink
          aria-label="Jump to the interactive table"
          to="/#table"
          className={getStyle(style, "subNavbarItem")}
        >
          Visualisation
        </HashLink>
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
