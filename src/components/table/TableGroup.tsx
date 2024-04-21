import GroupButtons from "../buttons/GroupButtons";
// import DesktopTable from "../table/DesktopTable";
import FixedDesktopTable from "./FixedDesktopTable";
import MobileTable from "./MobileTable";
// import { storage } from "../../services/firebase.config";
// import { ref, getDownloadURL } from "firebase/storage";
import { csvToArray } from "../../util/csv_conversion";
import { formatNumber } from "../../util/utils";
import { useState, useEffect } from "react";

function TableGroup() {
  /* Dataset */
  const [dmiCsv, setDmiCsv] = useState<string[][]>([]);

  /* Parses the data files on load */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/assets/data/final_dmi.csv");
        const csvString = await response.text();
        const newnewDmi = csvToArray(csvString);
        console.log(newnewDmi);
        newnewDmi.sort(function (a, b) {
          return parseFloat(b[6]) - parseFloat(a[6]);
        });
        setDmiCsv(newnewDmi);
      } catch (error) {
        console.log("=============");
        console.log("Unable to parse file");
        console.log(error);
        console.log("=============");
      }
    };

    fetchData();
  }, []);

  /* Changes the csv array value */
  const editTable = (k: string, j: string, val: string) => {
    const row = parseInt(k);
    const col = parseInt(j);
    const newDmi = [...dmiCsv];

    newDmi[row][col] = formatNumber(val);

    /* Recalculates the Index value */
    let sum =
      parseFloat(newDmi[row][1]) +
      parseFloat(newDmi[row][2]) +
      parseFloat(newDmi[row][3]) +
      parseFloat(newDmi[row][4]) +
      parseFloat(newDmi[row][5]);

    let average = sum / 5;
    newDmi[row][6] = formatNumber(average.toString());

    newDmi.sort(function (a, b) {
      return parseFloat(b[6]) - parseFloat(a[6]);
    });

    setDmiCsv(newDmi);
  };

  const [groupMobile, setGroupMobile] = useState<number>(1);

  const incrementGroupMobile = () => {
    if (groupMobile < 3) {
      setGroupMobile(groupMobile + 1);
    }
  };

  const decrementGroupMobile = () => {
    if (groupMobile > 1) {
      setGroupMobile(groupMobile - 1);
    }
  };

  return (
    <div id="table" className="w-full flex flex-col items-center">
      <FixedDesktopTable table={dmiCsv} tableEditor={editTable} />
      <MobileTable
        table={dmiCsv}
        groupMobile={groupMobile}
        tableEditor={editTable}
      />

      <GroupButtons
        incrementMobile={incrementGroupMobile}
        decrementMobile={decrementGroupMobile}
      />
    </div>
  );
}

export default TableGroup;
