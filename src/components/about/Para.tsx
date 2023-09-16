import getStyle from "../../Styles";

interface Props {
  paragraphs: string[];
}

function Para({ paragraphs }: Props) {
  return (
    <div className={getStyle(style, "ctn")}>
      {paragraphs.map((paragraph, index) => (
        <p className={getStyle(style, "text")} key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

const style = {
  ctn: [
    "p-4",
    "bg-white",
    "rounded-md",
    "shadow-lg",
    "flex",
    "flex-col",
    "gap-4",
    "md:w-4/6",
    "leading-6",
    "max-w-xl",
    "lg:leading-7",
    "lg:max-w-lg",
    "lg:p-7",
    "lg:px-8",
  ],
  text: ["text-base", "sm:text-lg", "text-justify"],
};

export default Para;
