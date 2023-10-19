import getStyle from "../../Styles";
import { useState, useEffect } from "react";
import DesktopCell from "./DesktopCell";
import { formatNumber } from "../../util/utils";

interface Props {
  table: string[][];
  tableEditor: (i: string, j: string, val: string) => void;
}

function FixedDesktopTable({ table, tableEditor }: Props) {
  /* Row State */
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
      let rank = 1;

      for (let i = 0; i < table.length; i++) {
        const row_builder = [];
        const cols: string[] = table[i];

        row_builder.push(
          <td key={rank} id={`${i}-0`} className="row-header">
            {rank}
          </td>
        );

        for (let j = 0; j < cols.length; j++) {
          let content = cols[j].trim();
          let id = `${i}-${j}`;

          if (j >= 1 && j <= 5) {
            /* The editable pillar values */
            row_builder.push(
              <DesktopCell
                key={id}
                content={content}
                id={id}
                handleBlur={handleBlur}
              />
            );
          } else if (j === 6) {
            /* The uneditable index value */
            content = formatNumber(content);
            row_builder.push(
              <td key={id} id={id} className="rows">
                {content}
              </td>
            );
          } else {
            /* The country cell */
            row_builder.push(
              <td key={id} id={id} className="rows">
                {content}
              </td>
            );
          }
        }

        rank++;
        /* Does having a key of rank conflict with the earlier td with key rank */
        rows.push(
          <tr key={rank} className="row-line">
            {row_builder}
          </tr>
        );
      }

      setRenderedRows(rows);
    }
  };

  useEffect(() => {
    renderRows();
  }, [table]);

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
            <th className={getStyle(styles, "th")}>P5</th>
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

export default FixedDesktopTable;
