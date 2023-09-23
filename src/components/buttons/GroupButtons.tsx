import getStyle from "../../Styles";

interface Props {
  incrementDesktop: () => void;
  decrementDesktop: () => void;
  incrementMobile: () => void;
  decrementMobile: () => void;
}

function GroupButtons({
  incrementDesktop,
  decrementDesktop,
  incrementMobile,
  decrementMobile,
}: Props) {
  const onIncrement = () => {
    incrementDesktop();
    incrementMobile();
  };

  const onDecrement = () => {
    decrementDesktop();
    decrementMobile();
  };

  return (
    <div className={getStyle(styles, "ctn")}>
      <div onClick={onDecrement} className={getStyle(styles, "btnPrev")}>
        Prev
      </div>
      <div onClick={onIncrement} className={getStyle(styles, "btnNext")}>
        Next
      </div>
    </div>
  );
}

const styles = {
  ctn: ["flex", "justify-between", "items-center", "mt-10", "p-3"],
  btnPrev: [
    "rounded-full",
    "p-2",
    "px-4",
    "text-sm",
    "bg-white",
    "cursor-pointer",
    "hover:bg-gray-200",
    "border-2",
    "select-none",
    "mr-8",
    "md:mr-10",
  ],
  btnNext: [
    "rounded-full",
    "p-2",
    "px-4",
    "text-sm",
    "bg-white",
    "cursor-pointer",
    "select-none",
    "hover:bg-gray-200",
    "border-2",
  ],
};

export default GroupButtons;
