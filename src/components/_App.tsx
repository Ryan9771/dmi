import FilterButtons from "../components/buttons/FilterButtons";
import DesktopTable from "../components/table/DesktopTable";
import GroupButtons from "../components/buttons/GroupButtons";

import { useEffect, useState } from "react";
import { csvToArray } from "../util/csv_conversion";
import { correlationsToArray } from "../util/correlations_conversion";
import { NestedDict } from "../util/correlations_conversion";
import { formatNumber } from "../util/utils";

function _App() {
  const [dmiCsv, setDmiCsv] = useState<string[][]>([]);
  const [correlationCsv, setCorrelationCsv] = useState<NestedDict>({});
  const [groupDesktop, setGroupDesktop] = useState<number>(1);
  const [clusterMode, setClusterMode] = useState<boolean>(false);
  const [correlationMode, setCorrelationMode] = useState<boolean>(false);

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
      <GroupButtons
        onIncrement={incrementGroupDesktop}
        onDecrement={decrementGroupDesktop}
      />
    </div>
  );
}

export default _App;
