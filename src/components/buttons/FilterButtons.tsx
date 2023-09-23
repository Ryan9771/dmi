import getStyle from "../../Styles";

interface Props {
  toggleClusterMode: () => void;
  toggleCorrelationMode: () => void;
  clusterMode: boolean;
  correlationMode: boolean;
}

function FilterButtons({
  toggleClusterMode,
  toggleCorrelationMode,
  clusterMode,
  correlationMode,
}: Props) {
  return (
    <div className={getStyle(styles, "ctn")}>
      <p className={getStyle(styles, "txt")}>Modes:</p>

      <div className={getStyle(styles, "btnGroup")}>
        <div
          onClick={toggleClusterMode}
          className={
            clusterMode
              ? getStyle(styles, "btnClusters") + " border-black"
              : getStyle(styles, "btnClusters")
          }
        >
          Clusters
        </div>
        <div
          onClick={toggleCorrelationMode}
          className={
            correlationMode
              ? getStyle(styles, "btnCorrelations") + " border-black"
              : getStyle(styles, "btnCorrelations")
          }
        >
          Correlations
        </div>
      </div>
    </div>
  );
}

const styles = {
  ctn: [
    "flex",
    "flex-col",
    "justify-between",
    "items-center",
    "p-3",
    "px-5",
    "rounded-lg",
    "sm:max-w-[400px]",
    "sm:flex-row",
  ],
  txt: ["text-md", "font-semibold", "mb-4", "sm:mr-5", "sm:mb-0"],
  btnGroup: ["flex", "items-center", "justify-between"],
  btnClusters: [
    "rounded-full",
    "p-2",
    "px-4",
    "text-sm",
    "bg-white",
    "cursor-pointer",
    "border-2",
    "select-none",
    "hover:bg-gray-200",
  ],
  btnCorrelations: [
    "ml-4",
    "rounded-full",
    "p-2",
    "px-4",
    "select-none",
    "text-sm",
    "bg-white",
    "cursor-pointer",
    "border-2",
    "hover:bg-gray-200",
  ],
};

export default FilterButtons;
