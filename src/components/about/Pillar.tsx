import getStyle from "../../Styles";

interface Props {
  title: string;
  content: string;
  imageSrc: string;
}

function Pillar({ title, content, imageSrc }: Props) {
  return (
    <div className={getStyle(styles, "ctn")}>
      <div className={getStyle(styles, "imgDiv")}>
        <img src={imageSrc} alt={title} className="w-full" />
      </div>
      <div className={getStyle(styles, "contentDiv")}>
        <div className={getStyle(styles, "titleDiv")}>{title}</div>
        <div className={getStyle(styles, "textCtn")}>{content}</div>
      </div>
    </div>
  );
}

const styles = {
  ctn: ["flex", "flex-col", "items-center", "rounded-md", "max-w-md"],
  imgDiv: ["overflow-hidden", "h-2/3", "w-full"],
  contentDiv: ["flex", "flex-col", "w-full", "h-full", "p-2"],
  titleDiv: ["bg-white", "w-full", "text-center", "font-bold"],
  textCtn: ["bg-white"],
};

export default Pillar;
