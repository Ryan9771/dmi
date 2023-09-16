import getStyle from "../Styles";
import Navbar from "../components/navbar/Navbar";
// import TableGroup from "../components/table/TableGroup";
import Intro from "../components/intro/Intro";
import About from "../components/about/About";

function Home() {
  return (
    <div className={getStyle(style, "ctn")}>
      <Navbar />
      <Intro />
      <About />
      {/* <TableGroup /> */}
    </div>
  );
}

const style = {
  ctn: [
    "flex",
    "flex-col",
    "w-full",
    "h-full",
    "items-center",
    "px-3",
    "md:px-0",
    "pb-3",
    "gap-10",
    "sm:gap-16",
  ],
};

export default Home;
