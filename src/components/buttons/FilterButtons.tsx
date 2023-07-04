import getStyle from "../../Styles";

interface Props {
  toggleClusterMode: () => void;
  toggleCorrelationMode: () => void;
}

function FilterButtons({ toggleClusterMode, toggleCorrelationMode }: Props) {
  return (
    <div className={getStyle(styles, "ctn")}>
      <p className={getStyle(styles, "txt")}>DMI Table</p>

      {/* TODO: Configure buttons through id or handler to handle button clicks */}

      <div className={getStyle(styles, "btnGroup")}>
        <div
          onClick={toggleClusterMode}
          className={getStyle(styles, "btnClusters")}
        >
          Clusters
        </div>
        <div
          onClick={toggleCorrelationMode}
          className={getStyle(styles, "btnCorrelations")}
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
    "mt-14",
    "p-3",
    "px-5",
    "rounded-lg",
    "shadow-lg",
    "border",
    "border-gray-200",
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
    "bg-gray-100",
    "cursor-pointer",
    "hover:bg-gray-200",
    "hover:scale-105",
    "border-2",
  ],
  btnCorrelations: [
    "ml-4",
    "rounded-full",
    "p-2",
    "px-4",
    "text-sm",
    "bg-gray-100",
    "cursor-pointer",
    "hover:bg-gray-200",
    "hover:scale-105",
    "border-2",
  ],
};

export default FilterButtons;
