import FilterButtons from "./components/buttons/FilterButtons";
import DesktopTable from "./components/table/DesktopTable";
import { useEffect, useState } from "react";
import { csvToArray } from "./util/csv_conversion";

export default function App() {
  const [dmiCsv, setDmiCsv] = useState<string[][]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/assets/data/dmi_2023_clusters.csv");
        const csvString = await response.text();
        csvToArray(csvString);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <FilterButtons />
      <DesktopTable />
    </div>
  );
}
