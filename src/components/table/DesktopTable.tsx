import getStyle from "../../Styles";
import { useState, useEffect } from "react";
import DesktopCell from "./DesktopCell";
import { formatNumber } from "../../util/utils";

interface Props {
  table: string[][];
  groupDesktop: number;
  tableEditor: (i: string, j: string, val: string) => void;
}

function DesktopTable({ table, groupDesktop, tableEditor }: Props) {
  const [renderedRows, setRenderedRows] = useState<JSX.Element[]>([]);

  /* Defines an onchange function property */
  const handleBlur = (event: React.FocusEvent<HTMLTableCellElement>) => {
    const text = event.target.innerText.trim();
    const id: string | undefined =
      event.target.attributes.getNamedItem("id")?.value;
    if (id) {
      const [row, col] = id.split("-");
      tableEditor(row, col, text);
    }
  };

  /* Builds the rows of the table */
  const renderRows = () => {
    const rows: JSX.Element[] = [];

    if (table && table.length > 0) {
      let group = 10 * (groupDesktop - 1) + 1;
      let rank = group;
      for (let i = rank; i < group + 10; i++) {
        const row = [];
        const cols: string[] = table[i];

        row.push(
          <td id={`${i}-0`} className="row-header">
            {rank}
          </td>
        );

        for (let j = 0; j < cols.length - 2; j++) {
          let content = cols[j].trim();
          let key = j + Math.random();
          if (j >= 1 && j <= 4) {
            row.push(
              <DesktopCell
                content={formatNumber(content)}
                id={`${i}-${j}`}
                handleBlur={handleBlur}
              />
            );
          } else if (j === 5) {
            content = formatNumber(content);
            row.push(
              <td key={key} id={`${i}-${j}`} className="rows">
                {content}
              </td>
            );
          } else {
            row.push(
              <td key={key} id={`${i}-${j}`} className="rows">
                {content}
              </td>
            );
          }
        }

        rank += 1;
        rows.push(
          <tr key={i + Math.random()} id={`${i}-6`} className="row-line">
            {row}
          </tr>
        );
      }
      setRenderedRows(rows);
    }
  };

  /* Reloads the table when the dependencies are changed */
  useEffect(() => {
    renderRows();
  }, [table, groupDesktop]);

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

        <tbody>{renderedRows}</tbody>
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
