import getStyle from "../Styles";
import Navbar from "../components/navbar/Navbar";
import TableGroup from "../components/table/TableGroup";

function Home() {
  return (
    <div className={getStyle(style, "ctn")}>
      <Navbar />
      <TableGroup />
    </div>
  );
}

const style = {
  ctn: [
    "flex",
    "flex-col",
    "w-full",
    "h-full",
    "bg-background",
    "items-center",
    "p-3",
  ],
};

export default Home;
