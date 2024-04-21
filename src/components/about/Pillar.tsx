import getStyle from "../../Styles";

interface Props {
  pillarNum: number;
  title: string;
  content: string;
  imageSrc: string;
}

function toColour(pillarNum: number) {
  switch (pillarNum) {
    case 1:
      return "bg-pillar-1";
    case 2:
      return "bg-pillar-2";
    case 3:
      return "bg-pillar-3";
    case 4:
      return "bg-pillar-4";
    case 5:
      return "bg-pillar-5";
    default:
      return "bg-white";
  }
}

function Pillar({ pillarNum, title, content, imageSrc }: Props) {
  return (
    <div className={getStyle(styles, "ctn") + toColour(pillarNum)}>
      <img className={getStyle(styles, "img")} src={imageSrc} alt={title} />
      <div className={getStyle(styles, "contentDiv")}>
        <p className={getStyle(styles, "title")}>{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}

const styles = {
  ctn: [
    "flex",
    "flex-col",
    "items-center",
    "rounded-sm",
    "shadow-sm",
    "w-[400px]",
  ],
  img: ["w-80"],
  contentDiv: [
    "flex",
    "flex-col",
    "gap-4",
    "bg-white",
    "p-2",
    "rounded-sm",
    "pt-3",
    "h-full",
  ],
  title: ["text-lg", "font-bold"],
  content: [],
};

export default Pillar;
