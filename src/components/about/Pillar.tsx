import getStyle from "../../Styles";

interface Props {
  title: string;
  content: string;
  imageSrc: string;
}

function Pillar({ title, content, imageSrc }: Props) {
  return (
    <div className={getStyle(styles, "ctn")}>
      <img src={imageSrc} alt={title} className="w-32 h-32" />
      <div className={getStyle(styles, "contentDiv")}>
        <div className={getStyle(styles, "titleDiv")}>{title}</div>
        <div className={getStyle(styles, "textCtn")}>{content}</div>
      </div>
    </div>
  );
}

const styles = {
  ctn: ["flex", "items-center", "rounded-md", "max-w-sm", "h-24", "overflow-hidden"],
  contentDiv: ["bg-white", "flex", "flex-col", "w-full", "h-full", "p-2"],
  titleDiv: ["w-full", "text-center", "font-bold"],
  textCtn: ["bg-white"],
};

export default Pillar;
