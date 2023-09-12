import getStyle from "../../Styles";
import homeImg from "/homeImage.webp";

function IntroAbout() {
  return (
    <div className={getStyle(style, "ctn")}>
      <img src={homeImg} className={getStyle(style, "img")} />
      <div className={getStyle(style, "textBox")}>
        <p>
          Citi, in partnership with Imperial College Business School’s Centre
          for Financial Technology, has launched its latest Digital Money Index.
          The index, now in its eighth year, tracks 113 countries (up from 84 in
          previous years) in terms of their development of digital money
          readiness.
        </p>
        <p>
          The index continues to classify countries into four clusters –
          Incipient, Emerging, In-transition and Materially Ready - according to
          their levels of digital readiness. This year’s revamped index includes
          new indicators and profiles the progress made by several developing
          economies in driving digital money readiness.
        </p>
      </div>
    </div>
  );
}

const style = {
  ctn: ["w-full", "flex", "flex-col", "gap-8", "mt-4", "items-center"],
  textBox: ["p-4", "bg-white", "rounded-md", "flex", "flex-col", "gap-4"],
  img: ["rounded-md", "w-80"],
};

export default IntroAbout;
