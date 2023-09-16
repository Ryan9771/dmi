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
    "leading-6",
    "sm:max-w-xl",
    "sm:px-6",
    "md:max-w-2xl",
    "md:px-8",
    "md:py-6",
    "md:w-4/6",
    "lg:leading-7",
    "lg:p-7",
    "lg:px-8",
  ],
  text: ["text-base", "sm:text-lg", "text-justify"],
};

export default Para;
