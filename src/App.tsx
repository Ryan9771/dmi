import FilterButtons from "./components/buttons/FilterButtons";
import DesktopTable from "./components/table/DesktopTable";
import { useEffect, useState } from "react";
import { csvToArray } from "./util/csv_conversion";

export default function App() {
  const [dmiCsv, setDmiCsv] = useState<string[][]>([]);
  const [groupDesktop, setGroupDesktop] = useState<number>(1);

  /* Parses the data files on load */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/assets/data/dmi_2023_clusters.csv");
        const csvString = await response.text();
        const newDataArray = csvToArray(csvString);

        newDataArray.sort(function (a, b) {
          return parseFloat(b[5]) - parseFloat(a[5]);
        });

        setDmiCsv(newDataArray);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  /* Changes the csv array value */
  const editTable = (i: string, j: string, val: string) => {
    const row = parseInt(i);
    const col = parseInt(j);
    const newDmi = [...dmiCsv];
    newDmi[row][col] = val;

    /* Recalculates the Index value */
    let sum =
      parseFloat(newDmi[row][1]) +
      parseFloat(newDmi[row][2]) +
      parseFloat(newDmi[row][3]) +
      parseFloat(newDmi[row][4]);

    let average = sum / 4;
    newDmi[row][5] = average.toFixed(3);

    newDmi.sort(function (a, b) {
      return parseFloat(b[5]) - parseFloat(a[5]);
    });

    setDmiCsv(newDmi); // TODO: Figure out how to force reload component upon dmiCsv change
  };

  return (
    <div className="w-full flex flex-col items-center">
      <FilterButtons />
      <DesktopTable
        table={dmiCsv}
        groupDesktop={groupDesktop}
        tableEditor={editTable}
      />
    </div>
  );
}
