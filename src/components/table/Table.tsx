import getStyle from "../../Styles";
import TableGroup from "./TableGroup";

function Table() {
  return (
    <div className={getStyle(style, "ctn")}>
      <p className={getStyle(style, "header")}>Interact with our Data</p>
      <TableGroup />
    </div>
  );
}

const style = {
  ctn: ["flex", "flex-col", "w-full", "gap-8", "items-center", "md:gap-10"],
  header: [
    "text-xl",
    "font-medium",
    "text-header-blue",
    "text-center",
    "sm:text-2xl",
    "md:text-3xl",
  ],
};

export default Table;
