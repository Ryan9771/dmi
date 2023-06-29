import getStyle from "../../Styles";

function DesktopTable() {
  return (
    <div id="table-div" className={getStyle(styles, "ctn")}>
      <table id="csv-table" className={getStyle(styles, "table")}>
        <thead className={getStyle(styles, "thead")}>
          <tr id="table-header">
            <th className={getStyle(styles, "firstTh")}>Rank 2023</th>
            <th className={getStyle(styles, "th")}>Country</th>
            <th className={getStyle(styles, "th")}>P1</th>
            <th className={getStyle(styles, "th")}>P2</th>
            <th className={getStyle(styles, "th")}>P3</th>
            <th className={getStyle(styles, "th")}>P4</th>
            <th className={getStyle(styles, "th")}>Index</th>
          </tr>
        </thead>

        <tbody></tbody>
      </table>
    </div>
  );
}

const styles = {
  ctn: [
    "hidden",
    "mt-10",
    "min-w-[300px]",
    "sm:max-w-7xl",
    "lg:max-w-5xl",
    "overflow-x-auto",
    "rounded-lg",
    "shadow-lg",
    "shadow-md",
    "justify-center",
    "sm:flex",
    "sm:flex-col",
  ],
  firstTh: ["headers", "text-center"],
  table: ["w-full", "text-left"],
  thead: ["bg-imperial-blue", "text-white"],
  th: ["headers"],
};

export default DesktopTable;
