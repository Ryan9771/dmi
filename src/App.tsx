import FilterButtons from "./components/buttons/FilterButtons";
import DesktopTable from "./components/table/DesktopTable";

export default function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <FilterButtons />
      <DesktopTable />
    </div>
  );
}
