import getStyle from "../../Styles";
import { useState, useEffect } from "react";
import { formatNumber } from "../../util/utils";
import MobileCell from "./MobileCell";

const HEADER_LIST = ["COUNTRY", "P1", "P2", "P3", "P4", "P5", "INDEX"];

interface MobileTableProps {
  table: string[][];
  groupMobile: number;
  tableEditor: (i: string, j: string, val: string) => void;
}

function MobileTable({ table, groupMobile, tableEditor }: MobileTableProps) {
  const [renderedTables, setRenderedTables] = useState<JSX.Element[]>([]);

  /* Defines an onchange function property */
  /* TODO: Bug in tabbing through mobile table */
  const handleBlur = (event: React.FocusEvent<HTMLTableCellElement>) => {
    const text = event.target.innerText.trim();
    const id: string | undefined =
      event.target.attributes.getNamedItem("id")?.value;
    if (id) {
      const [row, col] = id.split("-");
      tableEditor(row, col, text);
    }
  };

  /* Renders the rows upon load */
  const renderRows = () => {
    let group = 5 * (groupMobile - 1) + 1;
    let rank = group;
    let firstTable = true;

    /* Array of tables */
    const tableList: JSX.Element[] = [];

    if (table && table.length > 0) {
      console.log("============= GROUP NUMBER =============");
      console.log("Group:" + group);
      console.log(Math.min(group + 5, 14));
      console.log("============= GROUP NUMBER =============");
      for (let i = rank; i < Math.min(group + 5, 13); i++) {
        let innerRows: JSX.Element[] = [];
        const iterCols = table[i];

        /* Pushes the rank into the table */
        innerRows.push(
          <tr key={rank}>
            <th tabIndex={0} className="headers-mobile-rank">
              RANK
            </th>
            <th tabIndex={0} className="row-header-mobile">
              {rank}
            </th>
          </tr>
        );

        rank++;

        for (let j = 0; j < iterCols.length; j++) {
          let contentRow: JSX.Element;
          if (j >= 1 && j <= 6) {
            contentRow = (
              <MobileCell
                content={formatNumber(iterCols[j])}
                id={`${i}-${j}`}
                handleBlur={handleBlur}
                key={`${i}-${j}`}
              />
            );
          } else if (j === 6) {
            contentRow = (
              <td tabIndex={0} className="rows-mobile">
                {formatNumber(iterCols[j])}
              </td>
            );
          } else {
            contentRow = (
              <td tabIndex={0} className="rows-mobile">
                {iterCols[j]}
              </td>
            );
          }

          /* We now push the row to the list of rows */
          innerRows.push(
            <tr key={Math.random()}>
              <td tabIndex={0} className="headers-mobile">
                {HEADER_LIST[j]}
              </td>
              {contentRow}
            </tr>
          );
        }

        /* We now push the table to the list of tables */
        if (firstTable) {
          tableList.push(
            <table tabIndex={0} className={getStyle(style, "tableFirst")}>
              <tbody className={getStyle(style, "tbody")}>{innerRows}</tbody>
            </table>
          );
          firstTable = false;
        } else {
          tableList.push(
            <table tabIndex={0} className={getStyle(style, "table")}>
              <tbody className={getStyle(style, "tbody")}>{innerRows}</tbody>
            </table>
          );
        }
      }
    }

    setRenderedTables(tableList);
  };

  /* Reloads the table when the dependencies are changed */
  useEffect(() => {
    renderRows();
  }, [table, groupMobile]);

  return <div className={getStyle(style, "ctn")}>{renderedTables}</div>;
}

const style = {
  ctn: [
    "mt-10",
    "bg-dark-blue-1",
    "border",
    "flex",
    "flex-col",
    "min-w-[300px]",
    "overflow-x-auto",
    "rounded-xl",
    "shadow-md",
    "justify-center",
    "md:hidden",
  ],
  tableFirst: ["w-full", "h-full", "text-left"],
  table: ["w-full", "h-full", "text-left", "border-t-2", "border-black"],
  tbody: ["rounded-xl"],
};

export default MobileTable;
