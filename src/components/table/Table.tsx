import getStyle from "../../Styles";
import TableGroup from "./TableGroup";

function Table() {
  return (
    <div className={getStyle(style, "ctn")}>
      <p tabIndex={0} className={getStyle(style, "header")}>
        Interact with our Data
      </p>
      <p>Change a country's pillar value to see how its index responds</p>
      <TableGroup />
    </div>
  );
}

const style = {
  ctn: ["flex", "flex-col", "w-full", "gap-5", "items-center"],
  header: [
    "text-xl",
    "font-medium",
    "text-header-blue",
    "text-center",
    "sm:text-2xl",
  ],
};

export default Table;
