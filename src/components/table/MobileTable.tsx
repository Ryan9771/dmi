import getStyle from "../../Styles";
import { useState, useEffect } from "react";
import { formatNumber } from "../../util/utils";
import MobileCell from "./MobileCell";

const HEADER_LIST = ["COUNTRY", "P1", "P2", "P3", "P4", "INDEX"];

interface MobileTableProps {
  table: string[][];
  groupMobile: number;
  tableEditor: (i: string, j: string, val: string) => void;
  clusterMode: boolean;
  correlationMode: boolean;
}

function MobileTable({
  table,
  groupMobile,
  tableEditor,
  clusterMode,
  correlationMode,
}: MobileTableProps) {
  const [renderedTables, setRenderedTables] = useState<JSX.Element[]>([]);

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

  /* Renders the rows upon load */
  const renderRows = () => {
    let group = 5 * (groupMobile - 1) + 1;
    let rank = group;
    let firstTable = true;

    /* Array of tables */
    const tableList: JSX.Element[] = [];

    if (table && table.length > 0) {
      for (let i = rank; i < group + 5; i++) {
        let innerRows: JSX.Element[] = [];
        const iterCols = table[i];

        /* Pushes the rank into the table */
        innerRows.push(
          <tr>
            <th className="headers-mobile-rank">RANK</th>
            <th className="row-header-mobile">{rank}</th>
          </tr>
        );

        rank++;

        for (let j = 0; j < iterCols.length - 2; j++) {
          let contentRow: JSX.Element;
          if (j >= 1 && j <= 4) {
            contentRow = (
              <MobileCell
                content={formatNumber(iterCols[j])}
                id={`${i}-${j}`}
                handleBlur={handleBlur}
              />
            );
          } else if (j === 5) {
            contentRow = (
              <td className="rows-mobile">{formatNumber(iterCols[j])}</td>
            );
          } else {
            contentRow = <td className="rows-mobile">{iterCols[j]}</td>;
          }

          /* We now push the row to the list of rows */
          innerRows.push(
            <tr>
              <td className="headers-mobile">{HEADER_LIST[j]}</td>
              {contentRow}
            </tr>
          );
        }

        /* We check if the table is in clustermode */
        if (clusterMode) {
          innerRows.push(
            <tr>
              <td className="headers-mobile">CLUSTERS</td>
              <td className="rows-mobile text-center">{iterCols[6]}</td>
            </tr>
          );
        }

        /* We now push the table to the list of tables */
        if (firstTable) {
          tableList.push(
            <table className={getStyle(style, "tableFirst")}>
              <tbody className={getStyle(style, "tbody")}>{innerRows}</tbody>
            </table>
          );
          firstTable = false;
        } else {
          tableList.push(
            <table className={getStyle(style, "table")}>
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
  }, [table, groupMobile, clusterMode, correlationMode]);

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
    "sm:hidden",
  ],
  tableFirst: ["w-full", "h-full", "text-left"],
  table: ["w-full", "h-full", "text-left", "border-t-2", "border-black"],
  tbody: ["rounded-xl"],
};

export default MobileTable;
