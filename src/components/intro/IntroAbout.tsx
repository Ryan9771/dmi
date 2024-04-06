import getStyle from "../../Styles";
import homeImg from "/latam-group-pic.jpg";

function IntroAbout() {
  return (
    <div className={getStyle(style, "ctn")}>
      <img
        alt="Centre for global finance & tech"
        src={homeImg}
        className={getStyle(style, "img")}
      />
      <div className={getStyle(style, "textBox")}>
        <p tabIndex={0}>
          The launch of the Digital Money Index in the Latin American (LATAM)
          market is a joint effort led by Citi and the Centre for Financial
          Technology at Imperial College Business School. This endeavour
          highlights the essential connection between changing economic
          environments and the need for financial systems to adapt to the
          increasing digitalization of the economy and society.
        </p>
        <p tabIndex={0}>
          The foundation of the Digital Money Index lies in the recognition that
          as societies and economies transition towards digital platforms, there
          must be a parallel evolution in financial infrastructure to cater to
          the needs of this new digital age. This evolution is crucial for
          maintaining the relevance, efficiency, and support capability of
          financial systems in a digital economy.
        </p>
      </div>
    </div>
  );
}

const style = {
  ctn: [
    "w-full",
    "flex",
    "flex-col",
    "gap-8",
    "mt-4",
    "items-center",
    "trans",
    "md:mt-8",
    "md:gap-12",
    "lg:mt-4",
    "lg:mt-16",
    "lg:flex-row",
    "lg:justify-center",
  ],
  textBox: [
    "p-4",
    "bg-white",
    "rounded-md",
    "shadow-lg",
    "flex",
    "flex-col",
    "gap-4",
    "trans",
    "leading-6",
    "max-w-xl",
    "sm:text-base",
    "sm:px-6",
    "md:w-5/6",
    "lg:max-w-lg",
    "lg:py-5",
    "lg:px-8",
  ],
  img: [
    "rounded-md",
    "shadow-md",
    "w-80",
    "trans",
    "sm:w-[450px]",
    "xl:w-[600px]",
  ],
};

export default IntroAbout;
