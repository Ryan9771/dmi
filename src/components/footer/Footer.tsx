import getStyle from "../../Styles";

function Footer() {
  return (
    <div className={getStyle(styles, "ctn")}>
      <a href="#">Accessibilty</a>
    </div>
  );
}

const styles = {
  ctn: [
    "w-full",
    "flex",
    "border-t",
    "border-t-gray-300",
    "items-center",
    "justify-center",
    "text-sm",
    "text-gray-500",
    "py-2",
    "sm:py-5",
    "sm:text-base",
  ],
};

export default Footer;
