import FilterButtons from "../buttons/FilterButtons";
import GroupButtons from "../buttons/GroupButtons";
// import DesktopTable from "../table/DesktopTable";
import FixedDesktopTable from "./FixedDesktopTable";
import MobileTable from "./MobileTable";
// import { storage } from "../../services/firebase.config";
// import { ref, getDownloadURL } from "firebase/storage";
import {
  NestedDict,
  correlationsToArray,
} from "../../util/correlations_conversion";
import { csvToArray } from "../../util/csv_conversion";
import { formatNumber } from "../../util/utils";
import { useState, useEffect } from "react";

function TableGroup() {
  /* Dataset */
  const [dmiCsv, setDmiCsv] = useState<string[][]>([]);
  // const [correlationCsv, setCorrelationCsv] = useState<NestedDict>({});

  /* Table logic variables */
  // const [groupDesktop, setGroupDesktop] = useState<number>(1);
  // const [groupMobile, setGroupMobile] = useState<number>(1);
  // const [clusterMode, setClusterMode] = useState<boolean>(false);
  // const [correlationMode, setCorrelationMode] = useState<boolean>(false);

  // const ACTIVE_URL = ref(storage, "active/dmi_2023_clusters.csv");

  /* Parses the data from firebase storage */
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       /* Get URL and csv from active folder in firebase storage */
  //       const csvURL = await getDownloadURL(ACTIVE_URL);
  //       const response = await fetch(csvURL);
  //       const csvString = await response.text();
  //       const csvArray = csvToArray(csvString);

  //       /* Sorts the csv according to index */
  //       csvArray.sort(function (a, b) {
  //         return parseFloat(b[5]) - parseFloat(a[5]);
  //       });
  //       setDmiCsv(csvArray);

  //       /* Fetch the correlations csv locally */
  //       const response2 = await fetch("/src/assets/data/correlations.csv");
  //       const data = await response2.text();
  //       setCorrelationCsv(correlationsToArray(data));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
      parseFloat(newDmi[row][4]);

    let average = sum / 4;
    newDmi[row][5] = formatNumber(average.toString());

    newDmi.sort(function (a, b) {
      return parseFloat(b[5]) - parseFloat(a[5]);
    });

    setDmiCsv(newDmi);
  };

  return (
    <div id="table" className="w-full flex flex-col items-center">
      <FixedDesktopTable table={dmiCsv} tableEditor={editTable} />
      {/* <MobileTable
        table={dmiCsv}
        groupMobile={groupMobile}
        clusterMode={clusterMode}
        correlationMode={correlationMode}
        tableEditor={editTable}
      /> */}
    </div>
  );
}

export default TableGroup;
