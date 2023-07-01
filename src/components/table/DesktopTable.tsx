import getStyle from "../../Styles";
import { useEffect, useRef, useState } from "react";

interface Props {
  table: string[][];
  groupDesktop: number;
}

function DesktopTable({ table, groupDesktop }: Props) {
  // const tbody = useRef<HTMLTableSectionElement>(null);
  // const [tableData, setTableData] = useState<string[][]>(props.table);

  let rank = groupDesktop;
  const dataArray = table;

  const renderRows = () => {
    const rows = [];

    for (let i = rank; i < groupDesktop + 10; i++) {
      const row = [];
      const cols = dataArray[i];

      row.push(
        <td id={`${i}-0`} className="row-header">
          {rank}
        </td>
      );

      for (let j = 0; j < cols.length - 2; j++) {
        let content = cols[j].trim();
        if (j >= 1 && j <= 4) {
          content = parseFloat(content).toFixed(3);
          row.push(
            <td id={`${i}-${j}`} contentEditable className="rows">
              {content}
            </td>
          );
        } else if (j === 5) {
          content = parseFloat(content).toFixed(3);
          row.push(
            <td id={`${i}-${j}`} className="rows">
              {content}
            </td>
          );
        } else {
          row.push(
            <td id={`${i}-${j}`} className="rows">
              {content}
            </td>
          );
        }
      }

      rank += 1;
      rows.push(
        <tr id={`${i}-6`} className="rows text-center">
          {cols[6]}
        </tr>
      );
    }

    return rows;
  };

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

        <tbody>{renderRows()}</tbody>
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
