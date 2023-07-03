import FilterButtons from "./components/buttons/FilterButtons";
import DesktopTable from "./components/table/DesktopTable";
import { useEffect, useState } from "react";
import { csvToArray } from "./util/csv_conversion";

export default function App() {
  const [dmiCsv, setDmiCsv] = useState<string[][]>([]);
  const [groupDesktop, setGroupDesktop] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/assets/data/dmi_2023_clusters.csv");
        const csvString = await response.text();
        const newDataArray = csvToArray(csvString);
        setDmiCsv(newDataArray);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const editTable = (i: string, j: string, val: string) => {
    let newDmi = dmiCsv;
    newDmi[parseInt(i)][parseInt(j)] = val;
    setDmiCsv(newDmi);
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
