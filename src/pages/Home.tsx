import getStyle from "../Styles";
import Navbar from "../components/navbar/Navbar";
import TableGroup from "../components/table/TableGroup";
import Intro from "../components/intro/Intro";

function Home() {
  return (
    <div className={getStyle(style, "ctn")}>
      <Navbar />
      <Intro />
      <TableGroup />
    </div>
  );
}

const style = {
  ctn: [
    "flex",
    "flex-col",
    "w-full",
    "bg-background",
    "items-center",
    "px-3",
    "pb-3",
    "gap-8",
  ],
};

export default Home;
