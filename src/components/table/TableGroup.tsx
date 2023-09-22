import FilterButtons from "../buttons/FilterButtons";
import GroupButtons from "../buttons/GroupButtons";
import DesktopTable from "../table/DesktopTable";
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
  const [correlationCsv, setCorrelationCsv] = useState<NestedDict>({});

  /* Table logic variables */
  const [groupDesktop, setGroupDesktop] = useState<number>(1);
  const [groupMobile, setGroupMobile] = useState<number>(1);
  const [clusterMode, setClusterMode] = useState<boolean>(false);
  const [correlationMode, setCorrelationMode] = useState<boolean>(false);

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
        const response = await fetch("/src/assets/data/dmi_2023_clusters.csv");
        const csvString = await response.text();
        const newnewDmi = csvToArray(csvString);
        newnewDmi.sort(function (a, b) {
          return parseFloat(b[5]) - parseFloat(a[5]);
        });
        setDmiCsv(newnewDmi);

        const response2 = await fetch("/src/assets/data/correlations.csv");
        const data = await response2.text();
        setCorrelationCsv(correlationsToArray(data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  /* Changes the csv array value */
  const editTable = (k: string, j: string, val: string) => {
    const row = parseInt(k);
    const col = parseInt(j);
    const newDmi = [...dmiCsv];

    if (correlationMode) {
      const difference = parseFloat(val) - parseFloat(newDmi[row][col]);
      newDmi[row][col] = formatNumber(val);
      const baseCountry = newDmi[row][0];
      for (let i = 1; i < newDmi.length - 1; i++) {
        const newValue =
          parseFloat(newDmi[i][col]) +
          correlationCsv[baseCountry][newDmi[i][0]] * difference;
        newDmi[i][col] = newValue.toFixed(3);

        var sum =
          parseFloat(newDmi[i][1]) +
          parseFloat(newDmi[i][2]) +
          parseFloat(newDmi[i][3]) +
          parseFloat(newDmi[i][4]);
        var average = sum / 4;
        newDmi[i][5] = average.toFixed(3);
      }
    } else {
      newDmi[row][col] = formatNumber(val);

      /* Recalculates the Index value */
      let sum =
        parseFloat(newDmi[row][1]) +
        parseFloat(newDmi[row][2]) +
        parseFloat(newDmi[row][3]) +
        parseFloat(newDmi[row][4]);

      let average = sum / 4;
      newDmi[row][5] = formatNumber(average.toString());
    }

    newDmi.sort(function (a, b) {
      return parseFloat(b[5]) - parseFloat(a[5]);
    });

    setDmiCsv(newDmi);
  };

  /* Increments the group index for desktop */
  const incrementGroupDesktop = () => {
    if (groupDesktop < 10) {
      setGroupDesktop(groupDesktop + 1);
    }
  };

  /* Decrements the group index for desktop */
  const decrementGroupDesktop = () => {
    if (groupDesktop > 1) {
      setGroupDesktop(groupDesktop - 1);
    }
  };

  /* Increments the group index for mobile */
  const incrementGroupMobile = () => {
    if (groupMobile > 1) {
      setGroupMobile(groupMobile - 1);
    }
  };

  /* Decrements the group index for mobile */
  const decrementGroupMobile = () => {
    if (groupMobile < 20) {
      setGroupMobile(groupMobile + 1);
    }
  };

  const toggleClusterMode = () => {
    setClusterMode(!clusterMode);
  };

  const toggleCorrelationMode = () => {
    setCorrelationMode(!correlationMode);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <FilterButtons
        toggleClusterMode={toggleClusterMode}
        toggleCorrelationMode={toggleCorrelationMode}
        clusterMode={clusterMode}
        correlationMode={correlationMode}
      />
      <DesktopTable
        table={dmiCsv}
        groupDesktop={groupDesktop}
        clusterMode={clusterMode}
        correlationMode={correlationMode}
        tableEditor={editTable}
      />
      <MobileTable
        table={dmiCsv}
        groupMobile={groupDesktop}
        clusterMode={clusterMode}
        correlationMode={correlationMode}
        tableEditor={editTable}
      />
      <GroupButtons
        incrementDesktop={incrementGroupDesktop}
        decrementDesktop={decrementGroupDesktop}
        incrementMobile={incrementGroupMobile}
        decrementMobile={decrementGroupMobile}
      />
    </div>
  );
}

export default TableGroup;
