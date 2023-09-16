import getStyle from "../Styles";
import Navbar from "../components/navbar/Navbar";
import Table from "../components/table/Table";
import Intro from "../components/intro/Intro";
import About from "../components/about/About";

function Home() {
  return (
    <div className={getStyle(style, "ctn")}>
      <Navbar />
      <Intro />
      <About />
      <Table />
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
    "pb-3",
    "gap-10",
    "sm:gap-16",
    "lg:gap-20",
    "md:px-0",
  ],
};

export default Home;
